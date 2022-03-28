//React
import React, {useState} from "react"
import { Navigate, Link } from 'react-router-dom'

//Componentes

//Imágenes
import Money from './../../../assets/img/money.png'
import AddPaymentIcon from './../../../assets/img/add-payment-icon.png'
import AdministracionUsuariosIcon from './../../../assets/img/administracion-users-icon.png'
import AddUserIcon from './../../../assets/img/add-user-icon.png'
import AdministracionCuentasIcon from './../../../assets/img/administracion-cuentas-icon.png'
import AddCuentaIcon from './../../../assets/img/add-account-icon.png'
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
        <div className={'left-menu d-flex flex-column box-shadow-gr-xl'}>
            <div className={`d-flex menu-header justify-content-center`}>
                <p className={`a-light-white l mt-4 mb-4`}>Gestor de Pagos</p>
            </div>
            <div className="scroll-overflow">
            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Pagos</p>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/pagos-recibidos`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-14'} width={20} height={20} src={Money}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Pagos recibidos</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/crear-orden`}>
                <div className={'d-flex align-items-center option mt-4'}>
                    <img className={'ml-14'} width={20} height={20} src={AddPaymentIcon}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear orden</p>
                </div>
            </Link>
            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Usuarios</p>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/administracion-usuarios`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-14'} width={20} height={20} src={AdministracionUsuariosIcon}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Administración</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/crear-usuario`}>
                <div className={'d-flex align-items-center option mt-4'}>
                    <img className={'ml-14'} width={20} height={20} src={AddUserIcon}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear usuario</p>
                </div>
            </Link>
            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Cuentas banco</p>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/administracion-cuentas`}>
                <div className={'d-flex align-items-center option mt-5'}>
                    <img className={'ml-14'} width={20} height={20} src={AdministracionCuentasIcon}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Administración</p>
                </div>
            </Link>
            <Link className={`text-decoration-none`} to={`/${loggedUser.name}-${loggedUser.apellidos}/crear-cuenta`}>
                <div className={'d-flex align-items-center option mt-4'}>
                    <img className={'ml-14'} width={20} height={20} src={AddCuentaIcon}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear cuenta</p>
                </div>
            </Link>
            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Sistema</p>
            <div onClick={handleLogout} className={'d-flex align-items-center option mt-4 mb-4 cursor-pointer'}>
                <img className={'ml-14 mt-0'} width={20} height={20} src={Logout}></img><p className={`ml-3 a-light-dark text-medium mt-0 mb-0`}>Salir</p>
            </div>
            </div>
        </div>
        {(loggedUser=='false' || loggedUser==false) && <Navigate to={'/login'}></Navigate>}
        </>
    )
}
