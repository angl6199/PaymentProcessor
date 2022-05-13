//React
import React, {useState} from "react"
import { useParams } from 'react-router-dom'


//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import AbonosRecibidos from "../../components/organisms/AbonosRecibidos";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AbonosRecibidosPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar loggedUser={loggedUser} titulo={'Abonos recibidos'}></HeaderBar>
                <AbonosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser}></AbonosRecibidos>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}