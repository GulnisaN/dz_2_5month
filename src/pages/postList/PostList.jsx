import { useEffect, useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PostList = () =>
{
    const [posts, setPosts] = useState([])
    const [activePage, setActivePage] = useState(0)
    const navigate = useNavigate()

    useEffect(() =>
    {
        axios.get(`https://dummyjson.com/posts?limit=10&skip=${activePage}&select=title,reactions,userId`)
            // .then(resp => console.log(resp))
            .then(resp => setPosts(resp.data.posts))

    }, [activePage])

    const create = () => {
        axios.post("https://dummyjson.com/posts/add", setPosts)
            .then((resp) => {
                // console.log(resp);
                setPosts('Post created:', resp.data);
                navigate('/CreatePost');
            })
    }

    const deletePost = () => {
        axios.delete(`https://dummyjson.com/posts/${posts}`)
            // .then(resp => console.log(resp))
            .then(resp => deletePost(resp.data.posts))
    };

    const upDatePost = () => {
        axios.put(`https://dummyjson.com/posts/${posts}`)
            .then(resp => upDatePost(resp.data.posts))
    }

    return (
        <div><h4>Post List</h4>
            <h3>Список постов</h3>
            <button onClick={create}>Создать</button>
            {posts.map(p =>
                <li key={p.id}>
                    <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    <button onClick={deletePost}>Удалить</button>
                    <button onClick={upDatePost}>Редактировать</button>
                </li>
            )}
            <div>
                <button onClick={() => setActivePage(0)}>1</button>
                <button onClick={() => setActivePage(10)}>2</button>
                <button onClick={() => setActivePage(20)}>3</button>
            </div>
        </div>
    )
}
export default PostList