//DEPENDENCIES
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
//CSS
import '../css/General.css';
import '../css/Header.css';
//COMPONENTS
import Logout from '../components/Logout.js';
const Header =()=>{
    //obtain what is in localStorage
    const userLoggedIn=localStorage.getItem('userId');
    const userPicture=localStorage.getItem('userPicture');
    const userFirstName=localStorage.getItem('userFirstName');
    const userLastName = localStorage.getItem('userLastName');
    const userEmail=localStorage.getItem('userEmail'); 
    const mailto=`mailto:${userEmail}`;
    //check login
    const [isLoggedin, setIsLoggedin] = useState(false);
    function checkLogin(){
        if(userLoggedIn!==null){
            setIsLoggedin(true)
        }
    }

    //Use effect to avoid to many renders issue
    useEffect(()=>{
        checkLogin();
    },[])
    return(
        <header>
            {
                !isLoggedin?
                (
                <div className='user-login-and-signup'>
                    <div className='sign-up-link'><Link to ='/signUpPage'><a href=''>Sign Up</a></Link></div>
                    <div className='login-link'><Link to ='/loginPage'><a href=''>Login</a></Link></div>
                </div>
                ):(
                <div className='user-login-details'>
                    <a href={userPicture} title='view image' target='_blank'>
                        <img src={userPicture}/>
                    </a> Welcome,
                    <strong> {userFirstName} {userLastName} </strong> 
                    <a href={mailto} title='send email'> {userEmail} </a>
                    <a href='' title='see favorites'>Favorites</a>
                    <Logout/>
                </div>
                ) 
            }
        </header>
    )
}
export default Header;