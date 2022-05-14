//React
import React, {useState, useEffect} from "react"

//Componentes


//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PagosRecibidos({classNames, texto, funcion, tipo}){

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        {tipo == 'div' ?
            <div className={`salmon-button d-flex align-items-center a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>
                <p className={`mt-0 mb-0`}>{texto}</p>
            </div>
        : tipo == "submit"?
            <button type="submit" onClick={(e)=>funcion(e)} className={`salmon-button d-flex align-items-center pt-2 pb-2 pl-3 pr-3 a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>{texto}</button>
        :
            <button onClick={(e)=>funcion(e)} className={`salmon-button d-flex align-items-center pt-2 pb-2 pl-3 pr-3 a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>{texto}</button>
        }
        </>
    )
}