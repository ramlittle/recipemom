//DEPENDENCIES
import {Link} from 'react-router-dom';
//CSS
import '../css/General.css';
import '../css/Header.css';
const Header =()=>{
    return(
        <header>
            <div><a href=''>Sign Up</a></div>
            <div>
                <Link to ='/loginPage'><a href=''>Login</a></Link>
            </div>
            <div><a href=''>Favorites</a></div>
        </header>
    )
}
export default Header;