//React
import React, {useState} from "react"

//Componentes
import LoginForm from "../../components/organisms/LoginForm";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AboutUs({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`orange-layout`}></div>
        <div className={`gray-layout-login`}></div>
            <LoginForm loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LoginForm>
        </>
    )
}
