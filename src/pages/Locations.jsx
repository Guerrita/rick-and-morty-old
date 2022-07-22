import React, {useState} from 'react'
import banner from '@assets/banner.png'
import ItemList from '../containers/ItemList';
import useGetItems from "../Hooks/useGetItem";
import Character from "@components/Character";


const Locations = () => {
  const [page, setpage] = useState(1);
  const API = `https://rickandmortyapi.com/api/location/?page=${page}`;
  const allItems = useGetItems(API);
  const { results } = allItems;
  console.log(results?.[0].residents)
  return (
    <section>
    <figure>
      <img src={banner}/>
    </figure>
    <ItemList >
      {/* {results?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))} */}
      </ItemList>
    </section>
  )
}

export default Locations;