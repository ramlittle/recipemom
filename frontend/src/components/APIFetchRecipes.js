import React, { useEffect, useState } from "react";
import axios from 'axios';

//COMPONENTS
import RecipeList from './RecipeList.js';
import Pagination from './Pagination.js';
const APIFetchRecipes =()=>{
  //FETCH DATA using axios
  const [data, setData] = useState([]);
  const fetchData = () => {
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3265345c&app_key=7bfa7e02012d5b7fc29611c822c15802")
          .then((response) => {
            setData(response.data.hits)
          })
          .catch(()=>{
            alert('data failed to load from API')
          })
  }
  //RENDER/DISPLAY of data
  useEffect(() => {
    fetchData();
  },[])
  //PLACED THE DESIRED RECIPE DATA in the array
  let obtainedRecipes=[];
  for(let i =0;i<data.length;i++){
    obtainedRecipes.push(data[i].recipe);
  }

  console.log('data from APIFetch',obtainedRecipes)
  
  //PAGINATION
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  
  //Count of pages
  const nPages = Math.ceil(data.length / recordsPerPage)
  
  return(
        <>
          <Pagination
            nPages = { nPages }
            currentPage = { currentPage } 
            setCurrentPage = { setCurrentPage }
          />
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Label</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                
                  {
                    obtainedRecipes.map(list=> {
                      return <RecipeList
                                key={list.uri}
                                uri={list.uri}
                                label={list.label}
                                image={list.image}
                              />
                    })
                  }
                
            </tbody>
            
          </table>
         
        </>
    )
}

export default APIFetchRecipes;