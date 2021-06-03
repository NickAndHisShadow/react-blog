import BlogList from './BlogList';
import useSnapshot from './useSnaphsot';

const Home = () => {
const { data: blogs, isPending, error } = useSnapshot({ collection: "blogs" });

    return (
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Загрузка...</div>}
            {blogs && <BlogList blogs={blogs.sort((blog1, blog2) => {return blog2.date.toDate() - blog1.date.toDate()})} title='Все публикации' />}
        </div>
    );
}

export default Home;