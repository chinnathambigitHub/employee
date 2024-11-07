import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className='bg-image'>
      <div className='text-container'>
        <h1><i>Employee Management</i></h1>
        <p ><i>Welcome to the best platform for managing your workforce efficiently and effectively.</i></p>
        <button > START NOW</button>
        <ul>
        </ul>
      </div>
      <div className='image-container'>
        <img 
          src="https://static.vecteezy.com/system/resources/previews/049/160/790/non_2x/a-cartoon-man-in-a-suit-is-standing-in-front-of-a-large-screen-with-people-on-it-free-png.png" 
          alt="Employee management illustration" 
        />
      </div>
    </div>
  
  );
}

export default Home;
