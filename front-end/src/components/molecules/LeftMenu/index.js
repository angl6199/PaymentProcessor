//React
import React, {useState} from "react"
import { Navigate, Link } from 'react-router-dom'

//Componentes

//Imágenes
import Home from './../../../assets/img/home.png'
import Money from './../../../assets/img/money.png'
import Settings from './../../../assets/img/settings.png'
import Question from './../../../assets/img/question.png'
import Logout from './../../../assets/img/logout.png'


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function LeftMenu({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}

    function handleLogout(e) {
        e.preventDefault()
        localStorage.setItem('loggedUser', false)
        setLoggedUser(false)
    }
    return (
        <>
        <div className={'left-menu d-flex flex-column'}>
            <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/home`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-4'} width={20} height={20} src={Home}></img><p className={`ml-2 a-regular-white`}>Inicio</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/membresia`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-4'} width={20} height={20} src={Money}></img><p className={`ml-2 a-regular-white`}>Membresía</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/ajustes`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-4'} width={20} height={20} src={Settings}></img><p className={`ml-2 a-regular-white`}>Ajustes</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/nosotros`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-4'} width={20} height={20} src={Question}></img><p className={`ml-2 a-regular-white`}>Nosotros</p>
                </div>
            </Link>
            <div onClick={handleLogout} className={'d-flex align-items-center option mt-5 cursor-pointer'}>
                <img className={'ml-4'} width={20} height={20} src={Logout}></img><p className={`ml-2 a-regular-white`}>Salir</p>
            </div>
        </div>
        {(loggedUser=='false' || loggedUser==false) && <Navigate to={'/login'}></Navigate>}
        </>
    )
}
