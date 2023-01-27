//DEPENDECIES
import { useLocation,useNavigate } from 'react-router';

//COMPONENTS
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const ViewRecipePage =()=>{
    //LOCATOR
    const location = useLocation();
    const viewedRecipe = location.state.list;
    console.log(viewedRecipe,'item from view recipe')
    return (
        <>
            <Header/>
            <div>
                <div>
                    <div><h2>{viewedRecipe.label}</h2></div>
                    <div><img src={viewedRecipe.image}/></div>
                    <div>
                        <label>Source</label>
                        <label><a href={viewedRecipe.url}>{viewedRecipe.source}</a></label>
                    </div>
                </div> 

                <div>
                    <div>
                        <label>Calories</label>
                        <label>{(viewedRecipe.calories).toFixed(2)}</label>
                    </div>
                    <div>
                        <label>Cautions</label>
                        <label>{viewedRecipe.cautions}</label>
                    </div>
                    <div>
                        <label>Cuisine Type</label>
                        <label>{viewedRecipe.cuisineType}</label>
                    </div>
                    <div>
                        <label>Diet Labels</label>
                        <label>{viewedRecipe.dietLabels}</label>
                    </div>
                    <div>
                        <label>Dish Type</label>
                        <label>{viewedRecipe.dishType}</label>
                    </div>
                    <div>
                        <label>Meal Type</label>
                        <label>{viewedRecipe.mealType}</label>
                    </div>
                    <div>
                        <label>Preparation Time</label>
                        <label>{viewedRecipe.totalTime} minutes</label>
                    </div>
                    <div>
                        <label>Weight</label>
                        <label>{(viewedRecipe.totalWeight).toFixed(2)} grams</label>
                    </div>

                </div>

                <div>
                    <h3>Ingredients</h3>
                    <div>
                        {viewedRecipe.ingredients.map(ingredient=>(
                            <h6><img src={ingredient.image}/>{ingredient.text}</h6>
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