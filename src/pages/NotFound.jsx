import React from 'react'
import '@styles/NotFound.scss'
import portal from '../assets/portal.png';

const NotFound = () => {
  return (
    <section>
      <img src={portal} alt= 'portal'/>
      <h1>404<br/>Not F<span className='not-found-morty'></span><span className='not-found-summer'></span>nd </h1>
    </section>
  )
}

export default NotFound;