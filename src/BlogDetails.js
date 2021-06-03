import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div>Загрузка...</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Автор <i>{ blog.author }</i></p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Удалить</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;