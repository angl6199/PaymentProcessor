//React
import React, {useState, useEffect} from "react"
import { Link, Navigate } from 'react-router-dom'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import {loginRequest} from './../../../services/index'

//Imágenes



export default function LoginForm({loggedUser, setLoggedUser}){
    const [users, setUsers] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [redirect, setredirect] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');
    
    function login(e) {
        e.preventDefault();
        let credentials = {
            email: email,
            password: password
        }
        loginRequest(credentials).then((response)=>{
            if (response.data != undefined) {
                localStorage.setItem('loggedUser', response.data)
                setLoggedUser(response.data)
                setredirect(true)
            } else{
                displayError()
            }
        }).catch((error)=>{
            console.log(error)
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
                <form className={`mb-5`} onSubmit={login}>
                    <p className={`a-medium-black text-big mt-12 mb-8`}>Inicio de sesión</p>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>E-mail
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Contraseña
                        <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <div id={`error-container`} className={``}>
                        <div className={`error-container`}>
                        <p className={`a-regular-red`}>E-mail o contraseña no válidos</p>
                        </div>
                    </div>
                    <OrangeButton variant={1}></OrangeButton>
                </form>
                <hr className={`hr-gray m-0`}></hr>
                <Link className={`text-decoration-none needhelp w-100`} to={''}>
                <div className={'cursor-pointer'}>
                <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Acuerdo de privacidad</p>
                </div>
                </Link>

            </div>
        </div>
        {redirect && <Navigate to={`/${loggedUser.name}-${loggedUser.apellidos}/pagos-recibidos`}></Navigate>}
        </>
    )
}