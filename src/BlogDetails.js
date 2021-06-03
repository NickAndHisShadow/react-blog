import { useHistory, useParams } from 'react-router-dom';
import deleteData from './deleteBlog';
import useSnapshot from './useSnaphsot';
import * as moment from 'moment';
import 'moment/locale/ru';

const BlogDetails = () => {
    const { id } = useParams();
    const arg = {collection:'blogs', id: id};
    const history = useHistory();
    const { data: blog, isPending, error } = useSnapshot(arg);

    const handleClick = () => {
        try {
            deleteData(arg);
          } catch {
            console.log('something get frong :(')
          } finally {
            history.push('/')
          }
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div>Загрузка...</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Автор <i>{ blog.author }</i></p>
                    <p>{ moment(blog.date.toDate()).format('LLL') }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Удалить</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;