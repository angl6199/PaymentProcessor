//React
import React, {useState} from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import CrearOrden from "../../components/organisms/CrearOrden";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function CrearOrdenPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar></HeaderBar>
                <CrearOrden loggedUser={loggedUser}></CrearOrden>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}