import React, {useEffect, useState} from "react";
import ItemList from "@containers/ItemList";
import banner from "@assets/banner.png";
import useGetItems from "../Hooks/useGetItem";
import Character from "@components/Character";



const Characters = () => {
  let [pageNumber, updatePageNumber] = useState(1);  
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <section>
      <figure>
        <img src={banner} />
      </figure>
      <ItemList >
      {results?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))}
      </ItemList>
      <button onClick={() => {updatePageNumber(pageNumber+1);}}>Click me</button>
    </section>
  );
};

export default Characters;
