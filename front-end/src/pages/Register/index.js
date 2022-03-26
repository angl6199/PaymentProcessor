//React
import React, {useState} from "react"

//Componentes
import RegisterForm from "../../components/organisms/RegisterForm";
//Imágenes
import Logo from './../../assets/img/mercado-logo.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AboutUs(){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`yellow-layout-reg`}><img className={`mt-3 ml-15`} src={Logo}></img></div>
        <div className={`gray-layout-reg pt-12`}>
            <div className={`mx-auto`} style={{width: '710px'}}><p className={`a-medium-black h3 m-0 mb-7`}>Completa tus datos</p></div>
            <RegisterForm></RegisterForm>
        </div>
        </>
    )
}
