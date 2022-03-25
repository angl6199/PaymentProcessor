//React
import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom'

//Componentes
import Button from './../../atoms/BlueButton/index'
import Loading from "../../molecules/Loading";

//Imágenes

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function UpdateForm({loggedUser, setLoggedUser}){
    const [nombre, setNombre] = useState(loggedUser.nombre || '')
    const [apellido, setApellido] = useState(loggedUser.apellido || '')
    const [email, setEmail] = useState(loggedUser.email || '')
    const [contrasena, setContrasena] = useState(loggedUser.contrasena || '')
    const [disabled, setDisabled] = useState(true)
    const [ready, setReady] = useState(false)
    const [ready2, setReady2] = useState(false)
    const [lastbutton, setlastbutton] = useState(false)

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        const key = localStorage.getItem('key')
        axios.get(`https://mlwebapi.herokuapp.com/users/search/${key}`)
            .then(response => handleLoad(response.data))
            .catch((error) => console.log(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function handleLoad(objeto){
        setLoggedUser(objeto)
        console.log(objeto, "Estoy entrando")
        setNombre(objeto.nombre)
        setApellido(objeto.apellido)
        setEmail(objeto.email)
        setContrasena(objeto.contrasena)
        setReady(true)
        setTimeout(() => {
            setReady2(true)
        }, 1000);
    }

    function reLoad() {
        setlastbutton(true)
        setTimeout(() => {
            window.location.reload(true)
        }, 1000);
    }


    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}

    function updateUser(e){
        e.preventDefault();
        const user = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: contrasena,
            suscripcion1: loggedUser.suscripcion1,
            suscripcion2: loggedUser.suscripcion2}
            axios.put(`https://mlwebapi.herokuapp.com/users/update/${loggedUser._id}`, user)
                .then(reLoad)
                .catch((error) => console.log(error));
    }

    function handleDisabled(e){
        e.preventDefault();
        setDisabled(!disabled);
    }

    return (
        <>
        {ready && 
            <div className={'wrapper'}>
            <div className={`d-flex flex-column formcontainer2 box-shadow-gr-nm br-10 align-items-center mx-auto`}>
                    <div className={`w-90-2 h3`}><p className={`a-medium-black`}>Actualización de información</p></div>
                    <div className={`d-flex space-between w-90-2 mt-7`}>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>Nombre
                        <input autoComplete={'off'} disabled={disabled} className={`text-normal a-medium-black forminput2 ${disabled == true ? 'input-dis' : ''}`} type={'text'} name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>Apellido
                        <input autoComplete={'off'} disabled={disabled} className={`text-normal a-medium-black forminput2 ${disabled == true ? 'input-dis' : ''}`} type={'text'} name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                    </label>
                    </div>
                    <div className={`d-flex space-between w-90-2 mt-10`}>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>Email
                        <input autoComplete={'off'} disabled={disabled} className={`text-normal a-medium-black forminput2 ${disabled == true ? 'input-dis' : ''}`} type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label className={`a-regular-gray text-small d-flex flex-column`}>Clave
                        <input disabled={disabled} className={`text-normal a-medium-black forminput2 ${disabled == true ? 'input-dis' : ''}`} type={'password'} name='contrasena' value={contrasena} onChange={(e) => setContrasena(e.target.value)}></input>
                    </label>
                    </div>
                    <div className={`mx-auto d-flex w-90-2 mt-8 mb-8`} style={{width: '710px'}}><div className={`mr-8`}><Button text={'Editar campos'} variant={2} todo={handleDisabled} disable={!disabled}></Button></div> <div><Button text={'Actualizar'} todo={updateUser} variant={2} disable={(!(nombre.length>1 && apellido.length>1 && email.length>1 && contrasena.length>1)) || (disabled || lastbutton)}></Button></div></div>
            </div>
            </div>
        }
        <Loading hide={ready2} dark={true}></Loading>
        </>
    )
}