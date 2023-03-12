/*USERNAME
el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
el nombre de usuario no puede estar vacío.
el nombre de usuario no puede tener más de 35 caracteres.

PASS
la contraseña tiene que tener al menos un número.
la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
*/

const validation = (form,setErrors,errors) => {
    if(!form.username){
        setErrors({...errors,username:'E-mail vacío'});
    }else if(form.username.length < 35 ){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.username)){
            setErrors({...errors,username: ''});
        }else{
            setErrors({...errors,username: 'E-mail invalido'});
        }
    }else{
        setErrors({...errors,username: 'Exceso de characters'});
    }

    if (!form.password) {
        setErrors({...errors,password: 'Pass vacía'});
    }else if(form.password.trim().length >= 6 && form.password.trim().length <= 10){        //.trim() descarto lo espacios.
        
        if(form.password.map((char) => isNaN(char)) === true) setErrors({...errors,password: ''});
        else setErrors({...errors,password: 'Debe contener al menos un Número'});

    }else{
        setErrors({...errors,password: 'Debe contener entre 6 y 10 characters'});
    }
    //{...errors,password: 'Debe contener al menos un Número'}
}

export default validation;