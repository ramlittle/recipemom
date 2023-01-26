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
                            <div className ='img-container'>
                                <img src = {list.image}/>
                                <label>{list.label}</label>
                            </div>
                        </>
                    ))
                } 
            </div> 
        </>
    //     <table>
    //     <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Label</th>
    //             <th>Image</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //             {props.currentRecords.map(list => (
    //                     <tr>
    //                         <td>{list.uri}</td>
    //                         <td>{list.label}</td>
    //                         <td><img src={list.image}/></td>
    //                       </tr>
    //             ))
    //           } 
    //     </tbody>
        
    //   </table>
     
    )
}
export default RecipeList;
