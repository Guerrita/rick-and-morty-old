import React from 'react'
import banner from '@assets/banner.png'
import ItemList from '../containers/ItemList';
const API = 'https://rickandmortyapi.com/api/location/'


const Locations = () => {
  return (
    <section>
    <figure>
      <img src={banner}/>
    </figure>
    <ItemList API = {API} reference ={'location'}/>
    </section>
  )
}

export default Locations;