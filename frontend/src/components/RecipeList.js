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
                                <h5>{list.label}</h5>
                                <div>
                                    <label><small className='color-green'>Source</small></label>
                                    <label>
                                        <a href = {list.url}
                                            target='_blank'
                                        >{list.source}</a>
                                    </label>
                                </div>
                                <div>
                                    <label><small className='color-blue'>Diet Labels</small></label>
                                    <label>
                                        <small>{list.dietLabels}</small>
                                    </label>
                                </div>
                                <div>
                                    <label><small className='color-red'>Dish Type</small></label>
                                    <label>
                                        <small>{list.dishType}</small>
                                    </label>
                                </div>
                                <div>
                                    <label><small className='color-brown'>Meal Type</small></label>
                                    <label>
                                        <small>{list.mealType}</small>
                                    </label>
                                </div>
                            </div>
                        </>
                    ))
                } 
            </div> 
        </>  
    )
}
export default RecipeList;
