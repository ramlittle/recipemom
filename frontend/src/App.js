import {Routes,Route} from 'react-router';

//PAGES
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
const App =()=>{
  return(
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path ='/aboutPage' element ={<AboutPage/>}/>
     </Routes>
    </>
  )
}

export default App;