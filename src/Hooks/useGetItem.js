import { useState, useEffect } from "react";
import axios from 'axios'

const useGetItems = (API) => {
	const [items, setItems] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setItems(response.data);
	}, [API])

  return items
}


  
  export default useGetItems;