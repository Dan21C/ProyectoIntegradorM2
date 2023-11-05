const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
const regexNumber = /\d/

const validation = (userData, errors, setErrors) => {

    let newErrors=errors

    if(!userData.email){newErrors.email = "El email está vacio"} 
    else if(!regexMail.test(userData.email)) {newErrors.email="El email es invalido"}
    else {newErrors.email=""}

    if(!userData.password){newErrors.password="Ingrese la contraseña"} 
    else if(!regexNumber.test(userData.password)) {newErrors.password="Debe tener minimo un numero"}
    else {newErrors.password=""}

    setErrors(newErrors)
}

export default validation;