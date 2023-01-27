import { useLocation,useNavigate } from 'react-router';


const ViewRecipePage =()=>{
    //locator
    const location = useLocation();
    const viewedRecipe = location.state.list;
    console.log(viewedRecipe,'item from view recipe')
    return (
        <>
            View Page
        </>
    )
}
export default ViewRecipePage;