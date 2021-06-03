import { Link } from 'react-router-dom';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Автор <i>{blog.author}</i></p>
                        <span>{moment(blog.date.toDate()).format('LLL')}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;