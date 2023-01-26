//DEPENDECIES
import React from 'react';

const RecipeList =(props)=>{
    console.log('data from recipe list',props.currentRecords)
    return(
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Label</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
                {props.currentRecords.map(list => (
                        <tr>
                            <td>{list.uri}</td>
                            <td>{list.label}</td>
                            <td><img src={list.image}/></td>
                          </tr>
                ))
              } 
        </tbody>
        
      </table>
     
    )
}
export default RecipeList;
