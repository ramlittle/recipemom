import React, { useEffect, useState } from "react";


const APIFetchRecipes =()=>{

    const api={
      url:'https://api.spoonacular.com/recipes/complexSearch',
      key: 'f87d385d1036499abae16b0d624d4b69'
    }
    const [user, setUser] = useState([]);

    const fetchData=()=>{
        //I just read the documentation on how to fetch data on its website
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3265345c&app_key=7bfa7e02012d5b7fc29611c822c15802', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
          .then(res => res.json())
          .then((data) => setUser(data));
    }

  useEffect(() => {
    fetchData();
  },[])


console.log(user.hits[0].recipe.uri)
console.log(user.hits[0].recipe.label)
console.log(user.hits[0].recipe.image)

    return(
        <>
          <h2>{user.hits[0].recipe.uri}</h2>
          <small>{user.hits[0].recipe.label}</small>
          <img src = {user.hits[0].recipe.image}/>
        </>
    )
}

export default APIFetchRecipes;