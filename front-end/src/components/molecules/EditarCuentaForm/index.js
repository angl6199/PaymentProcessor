//React
import React, {useState} from "react"
import { Link } from 'react-router-dom'


//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'

//Imágenes
import accountIcon from './../../../assets/img/account-icon.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EditarCuentaForm({type, status, loggedUser}){
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [cuenta, setCuenta] = useState();
    const [fondos, setFondos] = useState();

    function printValues(e) {
        e.preventDefault();
        let todos = [nombres, apellidos, cuenta, fondos]
        console.log(todos);
    }

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
            <div className={`d-flex align-items-center`}>
                <img width={50} height={50} src={accountIcon}></img>
                <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato edición cuenta</p>
            </div>
            <hr className={`hr-gray mt-4 mb-0`}></hr>
            <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Nombre(s): 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='nombres' value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Apellido(s): 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Numero de Cuenta: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='cuenta' value={cuenta} onChange={(e) => setCuenta(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-10`}>Fondos: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='fondos' value={fondos} onChange={(e) => setFondos(e.target.value)}></input>
                </label>
                <div className="d-flex justify-content-space-between">
                    <SalmonButton funcion={printValues} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Actualizar`} ></SalmonButton>
                    <SalmonButton funcion={printValues} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Eliminar`} ></SalmonButton>
                    <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/administracion-cuentas`}>
                        <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                    </Link>
                </div>
            </form>
        </div>
        </>
    )
}