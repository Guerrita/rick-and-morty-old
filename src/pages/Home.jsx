import React from 'react'
import banner from "../assets/Rick-And-Morty-Transparent-Background.png"
import '@styles/Home.css'


const Home = () => {
  return (
    <figure className='banner'>
      <img src={banner} alt="Banner of Rick and Morty"/>
    </figure>
    )
}

export default Home;