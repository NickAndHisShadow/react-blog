import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ник');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
        }, 1000);
        
    }

    return ( 
        <div className="create">
            <h2>Добавить новый пост</h2>
            <form onSubmit={handleSubmit}>
                <label>Заголовок поста:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Текст поста:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Автор:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Ник">Ник</option>
                    <option value="Серафим">Серафим</option>
                </select>
                { !isPending && <button>Добавить пост</button>}
                { isPending && <button disabled>Пост добавляется...</button>}
            </form>
        </div>
     );
}
 
export default Create;