import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            { isPending && <div>Загрузка...</div> }
            {blogs && <BlogList blogs={blogs} title='Все посты' />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Ник')} title="Посты Ника" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Серафим')} title="Посты Серафима" />}
        </div>
    );
}

export default Home;