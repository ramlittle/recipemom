import {Routes,Route} from 'react-router';

//PAGES
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ViewRecipePage from './pages/ViewRecipePage.js';

const App =()=>{
  return(
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path ='/aboutPage' element ={<AboutPage/>}/>
        <Route path ='/viewRecipePage' element = {<ViewRecipePage/>}/>
     </Routes>
    </>
  )
}

export default App;