//React
import React, {useState, useEffect} from "react"
import { Link, Navigate } from 'react-router-dom'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import {registerRequest} from '../../../services/index'

//Imágenes



export default function SignUpForm({loggedUser, setLoggedUser}){
    const [users, setUsers] = useState()

    const [nombre, setNombre] = useState()
    const [apellidos, setApellidos] = useState()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm_password, setConfirm_password] = useState()
    const [redirect, setredirect] = useState(false)
    const [error, setError] = useState()

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');
    
    function signUp(e) {
        e.preventDefault();
        let credentials = {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            password: password,
            confirm_password: confirm_password
        }
        registerRequest(credentials).then((response)=>{
            let flag = false
            console.log(response, "Atencion")
            if (response.data == 'Email ocupado'){
                flag = true
                setError("Email ya ocupado")
                displayError()
            }
            if (response.data == 'Contrasenas no coinciden') {
                flag = true
                setError("Contraseñas no coinciden")
                displayError()
            }
            if(response.data == "Campos no validos"){
                flag = true
                setError("Campos no válidos")
                displayError()
            }
            else if(response.status == 200 && response.data != 'Email ocupado' && response.data != 'Contraseñas no coinciden' && response.data != 'Campos no validos' && flag==false){
                window.location.replace(`http://localhost:3000/login`)
            }
    })
    }

    function displayError() {
        var element = document.getElementById('error-container') 
        element.className = 'error-effect'

        setTimeout(() => {
            element.className = ''
        }, 1500);
    }

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        <div className={`position-absolute positionform`}>
            <div className={`d-flex flex-column formcontainer box-shadow-gr-nm br-10 align-items-center`}>
                <form className={`mb-5`} onSubmit={signUp}>
                    <p className={`a-medium-black text-big mt-12 mb-8`}>Registrar Usuario</p>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>Nombre
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Apellidos
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>E-mail
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Contraseña
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Confirmar contraseña
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='confirm_password' value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)}></input>
                    </label>
                    <div id={`error-container`} className={``}>
                        <div className={`error-container`}>
                        <p className={`a-regular-red`}>{error}</p>
                        </div>
                    </div>
                    <OrangeButton variant={1}></OrangeButton>
                </form>
                <hr className={`hr-gray m-0`}></hr>
                <Link className={`text-decoration-none needhelp w-100`} to={'/'}>
                <div className={'cursor-pointer'}>
                <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Regresar</p>
                </div>
                </Link>

            </div>
        </div>
        {redirect && <Navigate to={`/login`}></Navigate>}
        </>
    )
}