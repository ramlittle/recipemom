//DEPENDECIES
import React from 'react';
import {Link} from 'react-router-dom';

//CSS
import '../css/General.css';
import '../css/FavoritesList.css';


const FavoritesList =(props)=>{
    console.log('favorites list of user',props.favoritesOfUser);
   
    return(
        <>
                                 
            <div className = 'list-container'>
                {
                    props.favoritesOfUser.map(list => (
                        <>
                            <div className ='recipe-container'>
                                <img src = {list.image}/>
                                <h5>{list.label}</h5>
                                <div>
                                    <Link to ='/viewRecipePage' state = {{list}}>
                                        <button className='view-btn'>View</button>
                                    </Link>
                                </div>
                                <div>
                                    <label><small className='color-green'>Source</small></label>
                                    <label>
                                        <a href = {list.url}
                                            target='_blank'
                                            className='link'
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
export default FavoritesList;
