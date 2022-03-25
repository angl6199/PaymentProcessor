//React
import React, {useState} from "react"

//Componentes
import LoginForm from "../../components/organisms/LoginForm";

//Imágenes
import Logo from './../../assets/img/mercado-logo.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AboutUs({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`yellow-layout`}><img className={`mt-4 ml-15`} src={Logo}></img></div>
        <div className={`gray-layout`}></div>
            <LoginForm loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LoginForm>
        </>
    )
}
