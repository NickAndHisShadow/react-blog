import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from './firebase';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ник');
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);
    const ref = firebase.firestore().collection("blogs");
    const { nanoid } = require('nanoid');
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = nanoid(5);
        const date = firebase.firestore.Timestamp.fromDate(new Date());
        const blog = { title, body, author, date, id };

        setIsPending(true)
        ref
            .doc(blog.id)
            .set(blog)
            .catch((err) => {
                console.error(err);
            });
        setIsPending(false);
        // history.go(-1);
        history.push('/');
    }

    return (
        <div className="create">
            <h2>Добавить новую публикацию</h2>
            <form onSubmit={handleSubmit}>
                <label>Заголовок:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Текст:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Автор:</label>
                <select
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}
                >
                    <option value="Ник">Ник</option>
                    <option value="Серафим">Серафим</option>
                    <option value="Марк">Марк</option>
                    <option value="Аня">Аня</option>
                    <option value="Святослав">Святослав</option>
                    <option value="Денис">Денис</option>

                </select>
                {!isPending && <button>Добавить</button>}
                {isPending && <button disabled>Добавляется...</button>}
            </form>
        </div>
    );
}

export default Create;