//React
import React, {useState, useEffect} from "react"

//Componentes


//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PagosRecibidos({classNames, opciones}){
    const [showMenu, setShowMenu] = useState(false);
    const [selection, setSelection] = useState(opciones[0]);

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    function createOptions() {
        let listado = opciones.map((i) => 
            <button onClick={()=>changeSelection(i)} className={`drop-down-menu-option a-light-dark text-medium pt-1 pb-2 cursor-pointer`}>{i}</button>
        );
        return listado
    }

    function changeSelection(i) {
        setSelection(i);
        setShowMenu(false);
    }


    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
            <div className={`d-flex flex-column position-sticky ${classNames}`}>
                <button onClick={()=>setShowMenu(!showMenu)} className={`drop-down-button d-flex align-items-center justify-content-space-between pt-2 pb-2 pl-3 pr-3 a-light-dark text-medium box-shadow-gr-bg cursor-pointer`}>{selection}<i className={`arrow-down ml-2`}></i></button>
                <div className={`drop-down-menu flex-column position-absolute box-shadow-gr-bg ${showMenu ? `d-flex` : `d-none`}`}>
                    {createOptions()}
                </div>
            </div>
        </>
    )
}