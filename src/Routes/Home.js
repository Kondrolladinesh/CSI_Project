import React, {useState} from 'react';
import NavBar from '../Components/NavBar';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/bg5.avif';
import Footer from '../Components/Footer';

const Home = () => {
  const  username = localStorage.getItem("currentuser");
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const navigate = useNavigate();
  if(isCreateNewPost){
    navigate('/viewblog', { state: isCreateNewPost });
  }
  return (
    <div className='home-container'>
      <NavBar/>
      <div className='panel1'>
        <h1 className='user'>Well Come!! {username}</h1>
        <h1>Unlocking the Power of Positive</h1>
        <h2>Publish your passions, your way</h2>
        <h4>Create a unique and beautiful blog easily.</h4>
        <button onClick={toggleCreateNewPost} className='button-20'>Create your blog</button>
      </div>
      <div className='panel2'>
        <div>
          <h1>Choose the perfect design</h1>
          <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – 
            all with flexible layouts and hundreds of background images – or design something new.</p>
        </div>
        <div>
          <img src={img1} alt='bg1'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home