import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const ModifyBlog = (props) => {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    // const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    // function handleBlogSubmit(e) {
    //     e.preventDefault();

    //     if (!title || !content) {
    //         setFlag(true);

    //     } else {
    //         setFlag(false);
    //         localStorage.setItem("SubmissionTitle", JSON.stringify(title));
    //         localStorage.setItem("SubmissionContent", JSON.stringify(content));
    //         console.log("Saved in Local Storage");
    //     }
    // }
  return (
    <div className='blog-container'>
        <h1>Modify Blog</h1>
      <form>
        <input type="text"
        className='title' 
        placeholder="Title" 
        onChange={props.savePostTitleToState}
        required
        defaultValue={props.title} />
        <textarea type="text" 
        className='content'
        placeholder="Tell Your Story" 
        required
        onChange={props.savePostContentToState}
        defaultValue={props.content} />
        <div className='button-panel'>
            <button onClick={handleGoBack} >Back</button>
            <button title="update post" onClick={props.updatePost}>Update</button>
        </div>
        {/* {flag && <alert className='alert' color='primary' variant="warning" >
                Fill the Title for your story
                </alert>} */}
      </form>
    </div>
  )
}

export default ModifyBlog
