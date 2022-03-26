//React
import React, {useState} from "react"

//Componentes

//Imágenes

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function OrangeButton({variant, disable=false, text=false, todo=false}){

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        <button type='submit' onClick={todo ? todo : ''} disabled={disable} className={`${disable ? 'disable' : 'darkbutton'} a-regular-white text-normal b-none ${variant == 1 ? 'bb-w1' : variant == 2 ? 'bb-w2' : 'bb-w3' }`}> {text != false ? text : 'Ingresar'} </button>
        </>
    )
}