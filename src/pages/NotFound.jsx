import React from 'react'
<<<<<<< HEAD
import '@styles/NotFound.scss'
import portal from '../assets/portal.png';

const NotFound = () => {
  return (
    <section>
      <img src={portal} alt= 'portal'/>
      <h1>404<br/>Not F<span className='not-found-morty'></span><span className='not-found-summer'></span>nd </h1>
=======
import '@styles/NotFound.css'

const NotFound = () => {
  return (
    <section className='not-found-container'>
      <h1 className='not-found-title'>404<br/>Not F<span className='not-found-morty'></span><span className='not-found-summer'></span>nd </h1>
>>>>>>> ea1ef3086d58b6c5e3bc2af7d435fc0d32871866
    </section>
  )
}

export default NotFound;