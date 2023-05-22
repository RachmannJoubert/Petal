import {useEffect, useState} from 'react'
import SearchPageCards from './SearchPageCards';
// import {searchValue} from './DashHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const plantSearchCards = [
    {
      title: "Plant 1",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5314
    },
    {
      title: "Plant 2",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5315
    },
    {
      title: "Plant 4",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5316
    },
    {
      title: "Plant 4",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5316
    },
  ];
  
  function SearchCardListView({setPlant}){
    console.log(setPlant);
    const [plantData, setPlantData] = useState(undefined);
    const location = useLocation();
    const search = location.search.slice(1);
    console.log('plantData', plantData)

    useEffect(() => {
      axios.get(`https://perenual.com/api/species-list?page=1&key=sk-lZko6450201dec978711&q=${search}`)
      .then(response => {
        setPlantData(response?.data?.data)
      })
    }, [search, setPlantData]);
    // common_name
    return(
      plantData?.map(data => (
          <SearchPageCards
            key={data?.id}
            title={data?.common_name}
            url={data?.default_image?.original_url}
            setPlant={setPlant}
          />
        ))
    );
  }
  export default SearchCardListView