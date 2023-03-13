import React from "react";
import validation from "./validation.js";
//import {useNavigate} from 'react-router-dom';

const Form = ({login}) => {
    const [userData, setUserData] = React.useState({
        username: '',
        password: '' 
    });
    
    const [errors, setErrors] = React.useState({
            username: '', 
            password: '' 
    });

    const handleInputChange = (event) =>{
        const prop = event.target.name;
        const value = event.target.value;
        setUserData(
            {
                ...userData,
                [prop]: value,
            }
        );
        validation({...userData,[prop]: value,},setErrors,errors);
    };

    const handleSubmit = () =>{
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="username">Username:</label>
                <input type='text' name="username" value={userData.username} onChange={handleInputChange}/>
            </div>            
            <div>
                <label htmlFor="password">Password:</label>
                <input type='text' name="password" value={userData.password} onChange={handleInputChange}/>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Form;
