//DEPENDECIES
import { useLocation} from 'react-router';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

//COMPONENTS
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

//CSS
import '../css/General.css';
import '../css/ViewRecipePage.css';

//IMAGES
import RecipeMomLogo from '../images/recipemomlogo.gif';
const ViewRecipePage =()=>{
    const navigate = useNavigate();
    //get UserLoggedIn storage
    const userLoggedIn=localStorage.getItem('userId');
     // If user is not logged in redirect to log in page
     if( userLoggedIn===null ) {
        navigate('/loginPage');
    }

    //LOCATOR
    const location = useLocation();
    const viewedRecipe = location.state.list;
        
    console.log(viewedRecipe,'item from view recipe')
    console.log('showing userID',userLoggedIn)
    console.log('showing recipeID',viewedRecipe.uri)

    //HANDLER Add to Favorites
    const addToFavorite=(e)=>{
        e.preventDefault();
        const configuration = {
            method: 'post',
            url: 'http://localhost:8080/api/v1/favorites/addFavorite',
            data: {
              userID:userLoggedIn,
              recipeID:viewedRecipe.uri,
            },
          };
        
          // make the API call
          axios(configuration)
            .then((result) => {
              alert(result.data.status);
              window.location.reload(false);
            })
            .catch((error) => {
              alert(error.response.data.status);
            }); 
        }

    
    return (
        <>
            <Header/>
            <div className='viewed-recipe-container'>
                <div className='head'>
                    <div className='logo-container'>
                        <img src={RecipeMomLogo}/>
                        <Link to='/' className='return-link'>Return</Link>
                    </div>
                    <div>
                        <div><img src={viewedRecipe.image}/></div>
                        <div><h2>{viewedRecipe.label}</h2></div>
                        <div>
                            <label>Source :</label>
                            <label><a href={viewedRecipe.url}
                                className='link'
                                target='_blank'
                            >  {viewedRecipe.source}</a></label>
                        </div>
                    </div> 

                    <div>
                        <div>
                            <h3>Meal Details</h3>
                        </div>

                        <div>
                            <label className='color-green'>Calories</label>
                            <label>{(viewedRecipe.calories).toFixed(2)}</label>
                        </div>
                        <div>
                            <label className='color-red'>Cautions</label>
                            <label>{viewedRecipe.cautions}</label>
                        </div>
                        <div>
                            <label className='color-blue'>Cuisine Type</label>
                            <label>{viewedRecipe.cuisineType}</label>
                        </div>
                        <div>
                            <label className='color-yellow'>Diet Labels</label>
                            <label>{viewedRecipe.dietLabels}</label>
                        </div>
                        <div>
                            <label className='color-violet'>Dish Type</label>
                            <label>{viewedRecipe.dishType}</label>
                        </div>
                        <div>
                            <label className='color-orange'>Meal Type</label>
                            <label>{viewedRecipe.mealType}</label>
                        </div>
                        <div>
                            <label className='color-goldenrod'>Preparation Time</label>
                            <label>{viewedRecipe.totalTime} minutes</label>
                        </div>
                        <div>
                            <label className='color-dodgerblue'>Weight</label>
                            <label>{(viewedRecipe.totalWeight).toFixed(2)} grams</label>
                        </div>
                    </div>
                    <div>
                        <button onClick={addToFavorite}>Add to Favorites</button>
                    </div>
                </div>

                <div className='body'>
                    <h3>Ingredients</h3>
                    <div>
                        {viewedRecipe.ingredients.map(ingredient=>(
                            <h6><img src={ingredient.image}
                                className='ingredient-image'
                            />{ingredient.text}</h6>
                        ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ViewRecipePage;