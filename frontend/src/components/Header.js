//DEPENDENCIES
import {Link} from 'react-router-dom';
//CSS
import '../css/General.css';
import '../css/Header.css';
//COMPONENTS
import Logout from '../components/Logout.js';
const Header =()=>{
    const userLoggedIn=localStorage.getItem('userId');//obtain what is in localStorage
    const userPicture=localStorage.getItem('userPicture');
    const userFirstName=localStorage.getItem('userFirstName');
    const userLastName = localStorage.getItem('userLastName');
    const userEmail=localStorage.getItem('userEmail'); 
    if(userLoggedIn!==null){
        // navigate('/');
    }
    return(
        <header>
            <div className='sign-up-link'><Link to ='/signUpPage'><a href=''>Sign Up</a></Link></div>
            <div className='login-link'><Link to ='/loginPage'><a href=''>Login</a></Link></div>
            <div className ='favorites'><a href=''>Favorites</a></div>
            <div className='user-login-details'> Welcome {userFirstName} {userLastName} {userEmail} <img src={userPicture}/><Logout/></div>
        </header>
    )
}
export default Header;