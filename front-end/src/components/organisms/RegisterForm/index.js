//React
import React, {useState} from "react"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom'

//Componentes
import Button from './../../atoms/BlueButton/index'

//Imágenes

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function RegisterForm(){
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [acuerdo, setAcuerdo] = useState(false)

    const [redirect, setRedirect] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}

    function handlesubmit(e) {
        e.preventDefault();
        axios.post('https://mlwebapi.herokuapp.com/users/add', {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: contrasena,
        }).then((result) => {
            console.log(result)
            console.log(result.data)
            setRedirect(true)
        })
    }

    return (
        <>
        <form onSubmit={handlesubmit}>
        <div className={`d-flex flex-column formcontainer2 box-shadow-gr-nm br-10 align-items-center mx-auto`}>
                <div className={`d-flex space-between w-90-2 mt-7`}>
                <label className={`a-regular-gray text-small d-flex flex-column`}>Nombre
                    <input autoComplete={'off'} className={`text-normal a-medium-black forminput2`} type={'text'} name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </label>
                <label className={`a-regular-gray text-small d-flex flex-column`}>Apellido
                    <input autoComplete={'off'} className={`text-normal a-medium-black forminput2`} type={'text'} name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                </label>
                </div>
                <div className={`d-flex space-between w-90-2 mt-10`}>
                <label className={`a-regular-gray text-small d-flex flex-column`}>Email
                    <input autoComplete={'off'} className={`text-normal a-medium-black forminput2`} type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label className={`a-regular-gray text-small d-flex flex-column`}>Clave
                    <input className={`text-normal a-medium-black forminput2`} type={'password'} name='contrasena' value={contrasena} onChange={(e) => setContrasena(e.target.value)}></input>
                </label>
                </div>
                <div className={`d-flex w-90-2 mt-10 mb-8`}>
                    <input id={`terms`} className={`text-normal a-medium-black forminput3 mr-3`} type={'checkbox'} name='acuerdo' checked={acuerdo} onChange={(e) => setAcuerdo(e.target.checked)}></input>
                    <label htmlFor={`terms`} className={`a-regular-gray text-xs d-flex flex-column lh-16`}>Declaro que soy mayor de edad, acepto los Términos y Condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.</label>
                </div>
        </div>
        <div className={`mx-auto`} style={{width: '710px'}}><Button variant={2} disable={!(nombre.length>1 && apellido.length>1 && email.length>1 && contrasena.length>1 && acuerdo)}></Button></div>
        </form>
        {redirect && <Navigate to='/login'></Navigate>}
        </>
    )
}