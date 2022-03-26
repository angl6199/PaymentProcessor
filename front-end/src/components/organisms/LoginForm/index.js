//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'

//Imágenes

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LoginForm({loggedUser, setLoggedUser}){
    const [users, setUsers] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [redirect, setredirect] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://mlwebapi.herokuapp.com/users/all')
            .then(response => setUsers(response.data))
            .catch((error) => console.log(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function displayError() {
        var element = document.getElementById('error-container') 
        element.className = 'error-effect'

        setTimeout(() => {
            element.className = ''
        }, 1500);
    }

    function validateUser(e) {
        e.preventDefault()
        users.forEach(user => {
            if (user.email == email && user.contrasena == password) {
                setLoggedUser(user);
                setredirect(true);
                localStorage.setItem('loggedUser', user)
                localStorage.setItem('key', user._id)
            }
        });
        if (redirect == false) {
            displayError()    
        }
    }

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        <div className={`position-absolute positionform`}>
            <div className={`d-flex flex-column formcontainer box-shadow-gr-nm br-10 align-items-center`}>
                <form className={`mb-5`} onSubmit={validateUser}>
                    <p className={`a-medium-black text-big mt-12 mb-8`}>¡Hola! Ingresa tu email <br></br> y contraseña</p>
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

{/*                 <Link className={`mt-5 mb-5 text-decoration-none create`} to={'/sign-up'}>
                <div className={'cursor-pointer'}>
                    <p className={' text-normal a-regular-white'}>Crear Cuenta</p>
                </div>
                </Link> */}
                
                <hr className={`hr-gray m-0`}></hr>
                

                <Link className={`text-decoration-none needhelp w-100`} to={''}>
                <div className={'cursor-pointer'}>
                <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Acuerdo de privacidad</p>
                </div>
                </Link>

            </div>
        </div>
        {redirect && <Navigate to={`/${loggedUser.nombre}-${loggedUser.apellido}/home`}></Navigate>}
        </>
    )
}