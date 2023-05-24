import './App.css'
import {Routes, Route} from "react-router-dom";
import AboutPage from "./pages/aboutPages/AboutPage.jsx";
import PostList from "./pages/postList/PostList.jsx";
import Layout from "./components/Layout/Layout.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import SinglePost from "./pages/singlePost/SinglePost.jsx";
import NotFoundPage from "./pages/notFound/NotFoundPage.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import DeletePost from "./pages/deletePost/DeletePost.jsx";
import CreatesPost from "./pages/createP/CreatesPost.jsx";
import UpdatePost from "./pages/updatePost/UpdatePost.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<h3>Home Page</h3>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/posts" element={<PostList/>}/>
              <Route path="posts/:id" element={<SinglePost/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="posts/add" element={<CreatePost/>}/>
              <Route path="posts/add" element={<CreatesPost/>}/>
              <Route path="delete" element={<DeletePost/>}/>
              <Route path="update" element={<UpdatePost/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
