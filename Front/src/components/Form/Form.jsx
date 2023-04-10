import React from "react";
import validation from "./validation.js";
import {ContainerGlobal,   Inicio,Titulos,ImgRyM,ContData,Data,LoginButton,    Info,TitleInfo,Publi,ImgHenry} from "./Form.js";


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

        setUserData({...userData,[prop]: value,});
        validation({...userData,[prop]: value,},setErrors,errors);  //Valido los datos ingresados y le envío errors y setErrors.
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return (
        <ContainerGlobal>
            <Inicio>
                <Titulos>
                    <h1>Welcome to Rick and Morty API</h1>
                    <ImgRyM src="https://static.posters.cz/image/hp/66133.jpg"/>
                    <h3>Made by Gonzalo Nicolás Púa</h3>
                </Titulos> 

                <ContData onSubmit={handleSubmit}> 
                    <Data>
                        <label htmlFor="username">Username:</label>
                        <input type='text' name="username" value={userData.username} onChange={handleInputChange}/>
                    </Data>            
                    <Data>
                        <label htmlFor="password">Password:</label>
                        <input type='text' name="password" value={userData.password} onChange={handleInputChange}/>
                    </Data>
                    <LoginButton>Login</LoginButton>
                </ContData>   
            </Inicio>
            <Info>
                <TitleInfo>
                    <h3>Full Stack Developer Career</h3>
                </TitleInfo>
                <p>-Carrera destinada a aquellos que quieran obtener grandes conocimientos acerca del Desarrollo Web (Back-end & Front-end).</p>
                <h4>Modules to finish:</h4>
                <ul>
                    <li>Module 1: Approved</li>
                    <li>Module 2: Approved</li>
                    <li>Module 3: Approved</li>
                    <li>Module 4: Pending...</li>
                </ul>
                
                <Publi>
                    <ImgHenry src="https://avatars.githubusercontent.com/u/57154655?s=200&v=4"/>
                    <p>Patrocinado por <a target="_blank" rel="noopener noreferrer" href="https://www.soyhenry.com/">soyHenry</a>.</p>
                </Publi>
            </Info>
        </ContainerGlobal>
    )
}

export default Form;
