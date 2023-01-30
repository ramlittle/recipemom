import {Link, useNavigate} from 'react-router-dom';

const Logout=()=>{
    const navigate=useNavigate();
    const onLogout = () => {
        let confirmation = window.confirm('This will log you out!');

        //
        if(confirmation){
            localStorage.removeItem('userId');
            localStorage.removeItem('userFirstName');
            localStorage.removeItem('userLastName');
            localStorage.removeItem('userEmail');
            navigate('/loginPage');
        }

        
    };
    return(
        <>
            <button onClickCapture={onLogout}>Logout</button>
        </>
    )
}

export default Logout;
