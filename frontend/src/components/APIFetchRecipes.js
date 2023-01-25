//DEPENDECIES
import React, { useEffect, useState } from "react";

const APIFetchRecipes =()=>{

    const [user, setUser] = useState([]);

    //FETCHING OF DATA
    const fetchData = () => {
        // return fetch("https://jsonplaceholder.typicode.com/users")
        return fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    //DISPLAYING/RENDERING OF DATA after page loads
    useEffect(() => {
        fetchData();
    },[])


    console.log('list of users',user)
    console.log('array',user.results)
    let pokemons = user.results;
    return(
        <>
         <h1>User List</h1>
            <ul>
                {pokemons && pokemons.length > 0 && pokemons.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.name}</li>
                ))}
            </ul>

        </>
    )
}

export default APIFetchRecipes;