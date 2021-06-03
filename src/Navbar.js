import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SimpleBlog</h1>
            <div className="links">
                <Link to="/">Главная</Link>
                <Link to="/create">Новая публикация</Link>
            </div>
        </nav>
    );
}

export default Navbar;