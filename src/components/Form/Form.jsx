    import { useState } from "react";
    import Style from '../Form/Forms.module.css'
    import validation from "./validations"    
    
const Form = ({login}) => {
    

            const [userData,setUserData]=useState({
                email:"",
                password:""
            })
    
            const [errors,setErrors]=useState({})

            const handleChange = (event) => {
                const property=event.target.name
                const value=event.target.value
                console.log(property,value)
                setUserData({...userData, [property]: value })
                validation({...userData,[property]: value }, errors, setErrors)
            };
    
            const submitHandler = (event) => {
                event.preventDefault();
                login(userData);
            }
    
            return (
                <div className={Style.container}>
                <form on onSubmit={submitHandler} className={Style.form}> 
                <h1 className={Style.title}>Login</h1>
    
                    <div className={Style.second}>
                        <label htmlFor="email" className={Style.labels}>Email</label>
                        <input type="text" name="email" value={userData.email} onChange={handleChange} className={Style.type}/>
                        {/* <input type="text" name="email" value={userData.email} onChange={handleChange} className={errors.email ? Style.error : Style.success}/> */}
                        <hr />
                        <p>{errors.email}</p>
                    </div>
    
                    <div className={Style.second}>
                        <label htmlFor="password"className={Style.labels}>password:</label>
                        <input type="password" name="password" value={userData.password} onChange={handleChange} className={Style.type}/>
                        <hr />
                        <p>{errors.password}</p>

                    </div>
    
                <button>Ingresar</button>
    
            </form>
            </div>
        );
    }

export default Form;