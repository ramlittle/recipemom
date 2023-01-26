//DEPENDECIES
import React from 'react';

const RecipeList =(props)=>{
    return(
        <tr>
            <td>{props.uri}</td>
            <td>{props.label}</td>
            <td><img src={props.image}/></td>
        </tr>
    )
}
export default RecipeList;
