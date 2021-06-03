import { useEffect, useState } from 'react';
import firebase from './firebase';

const useSnapshot = (arg) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ref = firebase.firestore().collection(arg.collection);
        setIsPending(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            if (querySnapshot.empty) {
                console.log('could not fetch data for that resourse');
            } else {
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())
                });
                arg.id ? setData(items.find((item) => { return item.id === arg.id })) : setData(items);
            };
            setIsPending(false);
        },
            err => {
                setError(err);
                console.error(err);
            });
        // eslint-disable-next-line
    }, [arg.collection, arg.id]);
    return { data, isPending, error };
};

export default useSnapshot;