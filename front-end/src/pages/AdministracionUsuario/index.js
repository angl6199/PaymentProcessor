//React
import React, {useState} from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import AdministracionUsuario from "../../components/organisms/AdministracionUsuario";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AdministracionUsuarioPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar loggedUser={loggedUser} titulo={'Administración de usuarios'} ></HeaderBar>
                <AdministracionUsuario loggedUser={loggedUser}></AdministracionUsuario>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}