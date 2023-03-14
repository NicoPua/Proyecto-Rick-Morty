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
    }else if(form.username.length > 35 ){
        setErrors({...errors,username: 'Exceso de characters'});       
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.username)){
        setErrors({...errors,username: 'E-mail invalido'});
    }else{
        setErrors({...errors,username: ''});
    }

    if (!form.password) {
        setErrors({...errors,password: 'Pass vacía'});

    }else if(form.password.length < 6 && form.password.length > 10){        //.trim() descarto lo espacios.
        setErrors({...errors,password: 'Debe contener entre 6 y 10 characters'});

    }else if(!/\d/.test(form.password)) {
        setErrors({...errors,password: 'Debe contener al menos un Número'}); //{...errors,password: 'Debe contener al menos un Número'}

    }else setErrors({...errors,password: ''});
    
}

export default validation;