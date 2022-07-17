import React from 'react'
import ItemList from '@containers/ItemList'

const API = 'https://rickandmortyapi.com/api/character/?page=1'

const Characters = () => {
  return (
    <ItemList API = {API}/>
  )
}

export default Characters;