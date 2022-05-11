//React
import React, {useState} from "react"

//Componentes
import SignUpForm from "../../components/organisms/SignUpForm";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SignUpPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`orange-layout`}></div>
        <div className={`gray-layout-login`}></div>
            <SignUpForm loggedUser={loggedUser} setLoggedUser={setLoggedUser}></SignUpForm>
        </>
    )
}
