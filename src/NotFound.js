import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Упс!</h2>
            <p>Такая страница не существует</p>
            <Link to='/'>На главную</Link>
        </div>
    );
}

export default NotFound;