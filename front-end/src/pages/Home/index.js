//React
import React, {useState} from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import HomeMovies from "../../components/organisms/HomeMovies";

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
        <div className={`dark-layout d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <HomeMovies loggedUser={loggedUser}></HomeMovies>
        </div>
        {console.log(loggedUser)}
        </>
    )
}