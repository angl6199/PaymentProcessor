//React
import React, {useState} from "react"
import { useParams } from 'react-router-dom'

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import EditarUsuario from "../../components/organisms/EditarUsuario";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EditarUsuarioPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)
    const {id} = useParams()

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar loggedUser={loggedUser} titulo={'Edición de usuario'}></HeaderBar>
                <EditarUsuario id_Editado={id} loggedUser={loggedUser}></EditarUsuario>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}