//React
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import { loginRequest } from '../../../services/index'

export default function LoginForm({ loggedUser, setLoggedUser }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    function login(e) {
        e.preventDefault();
        let credentials = {
            username: email,
            password: password
        }
        loginRequest(credentials).then((response) => {
            if (response.data === 'Usuario no existe') {
                setError("Credenciales inválidas")
                displayError()
            }
            if (response.data === 'Usuario no verificado') {
                setError("Usuario no verificado por email")
                displayError()
            }
            else if (response.status === 200 && response.data !== 'Usuario no verificado' && response.data !== 'Usuario no existe') {
                Cookies.set('loggedUser', `{"id": "${response.data._id}"}`, { expires: 7 })
                window.location.reload();
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

    return (
        <>
            <div className={`position-absolute positionform`}>
                <div className={`d-flex flex-column formcontainer box-shadow-gr-nm br-10 align-items-center`}>
                    <form className={`mb-5`} onSubmit={login}>
                        <p className={`a-medium-black text-big mt-12 mb-8`}>Inicio de sesión</p>
                        <label className={`a-regular-gray text-small d-flex flex-column`}>E-mail
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='username' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Contraseña
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        <div id={`error-container`} className={``}>
                            <div className={`error-container`}>
                                <p className={`a-regular-red`}>{error}</p>
                            </div>
                        </div>
                        <OrangeButton variant={1}></OrangeButton>
                    </form>
                    <hr className={`hr-gray m-0`}></hr>
                    <Link className={`text-decoration-none needhelp w-100`} to={'/signup'}>
                        <div className={'cursor-pointer'}>
                            <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Registrar nuevo usuario</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}