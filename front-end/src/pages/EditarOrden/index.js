//React
import React, {useState} from "react"
import { useParams } from 'react-router-dom'

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import EditarOrden from "../../components/organisms/EditarOrden";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EditarOrdenPage({loggedUser, setLoggedUser}){
    const {id} = useParams()

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar loggedUser={loggedUser} titulo={"Detalles de operación"}></HeaderBar>
                <EditarOrden id={id} loggedUser={loggedUser}></EditarOrden>
            </div>
        </div>
        {console.log(loggedUser)}
        {console.log(id, "Estos son los params desde la page")}
        </>
    )
}