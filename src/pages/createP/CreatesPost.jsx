import { useNavigate } from "react-router-dom";

const CreatesPost = () => {
    const nav = useNavigate()
    const handleClick = () => {
        nav('/DeletePost')
    }

    return (
        <div>
            <h4>Создать пост</h4>
            <button onClick={handleClick}>Create</button>
        </div>
    );
};

export default CreatesPost;