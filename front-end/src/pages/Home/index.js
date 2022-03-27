//React
import React, {useState} from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import PagosRecibidos from "../../components/organisms/PagosRecibidos";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes
import Logo from './../../assets/img/mercado-logo.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Home({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar></HeaderBar>
                <PagosRecibidos loggedUser={loggedUser}></PagosRecibidos>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}