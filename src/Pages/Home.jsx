import React from 'react';
import Card1 from '../Components/Card1';
import cardImg from "../Images/Card/College.jpg"
import  Carousel  from '../Components/Carousel';



function Home() {
  return <>


   <div className='home'>
    <Carousel/>
   </div>
   <div className="card">

   <Card1 img={cardImg} heading= "College1" />
   <Card1 img={cardImg} heading= "College2" />
   <Card1 img={cardImg} heading= "College3" />

   </div>
   
  </>
}

export default Home;