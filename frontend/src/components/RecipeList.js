//DEPENDECIES
import React from 'react';

//CSS
import '../css/General.css';
import '../css/RecipeList.css';
const RecipeList =(props)=>{
    console.log('data from recipe list',props.currentRecords);
    return(
        <>
            <div className = 'list-container'>
                {
                    props.currentRecords.map(list => (
                        <>
                            <div className ='recipe-container'>
                                <img src = {list.image}/>
                                <label>{list.label}</label>
                            </div>
                        </>
                    ))
                } 
            </div> 
        </>  
    )
}
export default RecipeList;
