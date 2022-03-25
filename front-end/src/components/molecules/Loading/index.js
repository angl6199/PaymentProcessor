//React
import React, {useState} from "react"

//Material UI
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading({hide=false, dark=false}){

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}

    return (
        <>
        <div className={`h3 a-bold-white ml-auto mr-auto loading-screen z-3 ${dark && 'dark-background'} ${hide == false ? 'd-flex align-items-center' : 'loading-screen-exit'}`}>
            <p className={`mr-3 ${hide && 'd-none'}`}>CARGANDO</p>
            <CircularProgress className={`${hide && 'd-none'}`} color={'error'}></CircularProgress>
        </div>
        </>
    )
}
