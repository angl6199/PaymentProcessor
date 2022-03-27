//React
import React, {useState} from "react"

//Componentes

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function HeaderBar(){

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex align-items-center justify-content-space-between right-header`}>
            <p className="mt-0 mb-0 ml-12 a-light-white text-big">Titulo de la pagina</p>
            <p className="mt-0 mb-0 mr-12 a-light-white text-big">Usuario</p>
        </div>
        </>
    )
}