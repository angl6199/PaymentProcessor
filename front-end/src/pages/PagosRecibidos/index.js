//React
import React, {useState} from "react"
import { useParams } from 'react-router-dom'


//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import PagosRecibidos from "../../components/organisms/PagosRecibidos";
import HeaderBar from "../../components/organisms/HeaderBar";

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function PagosRecibidosPage({loggedUser, setLoggedUser}){
    const [show, setShow] = useState(false)
    const {refresh} = useParams()
    if (refresh == true) {
        console.log(refresh, "Este es el trigger para reload")
        window.location.reload(false);
    }
    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <div className={`d-flex flex-column right-screen`}>
                <HeaderBar loggedUser={loggedUser} titulo={'Pagos realizados'}></HeaderBar>
                <PagosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser}></PagosRecibidos>
            </div>
        </div>
        {console.log(loggedUser)}
        </>
    )
}