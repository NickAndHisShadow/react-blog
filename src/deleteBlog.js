import firebase from './firebase';

const deleteData = (arg) => {

    const ref = firebase.firestore().collection(arg.collection);
    ref
        .doc(arg.id)
        .delete()
        .catch((err) => {
            console.error(err);
        })
}

export default deleteData;