//React
import React, {useState} from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import Profiles from "./../../components/organisms/Profiles";

//Imágenes
import Logo from './../../assets/img/mercado-logo.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Membresia({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser, setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column w-90-2 align-items-center`}>
                <div className={`yellow-layout`}><img className={`ml-12 mt-8`} src={Logo}></img></div>
                <div className={`gray-layout`}></div>
                <Profiles></Profiles>
            </div>
        </div>
        </>
    )
}
