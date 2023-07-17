import React from 'react';
import NavBar from '../Components/NavBar';
import './Home.css';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/bg5.avif'

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar/>
      <div className='panel1'>
        <h1>Unlocking the Power of Positive</h1>
        <h2>Publish your passions, your way</h2>
        <h4>Create a unique and beautiful blog easily.</h4>
        <NavLink to="/writeblog">
          <button className='button-20'>Create your blog</button>
        </NavLink>
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
    </div>
  )
}

export default Home