import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () =>
{
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        userId: 31
    });
    const handleInputChange = (event) =>
    {
        setPostData({ ...postData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        axios.post("https://dummyjson.com/posts/add", postData)
            .then((resp) => {
                console.log(resp);
                setPostData('Post created:', resp.data);
                navigate('/posts');
            })
    };

    return (
        <div>
            <h4>CreatePost</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={postData.title}
                    onChange={handleInputChange}
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={postData.content}
                    onChange={handleInputChange}
                ></textarea>

                <label htmlFor="userId">UserId:</label>
                <textarea
                    id="userId"
                    name="userId"
                    value={postData.userId}
                    onChange={handleInputChange}
                ></textarea>


                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePost;