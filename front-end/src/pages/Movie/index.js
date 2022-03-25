//React
import React, {useState} from "react"
import { useParams } from "react-router";

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import MovieScreen from "../../components/organisms/MovieScreen";

//Imágenes
import Logo from './../../assets/img/mercado-logo.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Movie({loggedUser, setLoggedUser}){
    const {id} = useParams()

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`dark-layout d-flex`}>
            <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
            <MovieScreen id={id}></MovieScreen>
        </div>
        </>
    )
}