//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import Loading from './../../molecules/Loading/index'

//Imágenes
import i1 from './../../../assets/img/i1.jpg'
import i2 from './../../../assets/img/i2.jpg'
import i3 from './../../../assets/img/i3.jpg'
import i4 from './../../../assets/img/i4.jpg'
import i5 from './../../../assets/img/i5.jpg'
import i6 from './../../../assets/img/i6.jpg'
import i7 from './../../../assets/img/i7.jpg'
import i8 from './../../../assets/img/i8.jpg'
import i9 from './../../../assets/img/i9.webp'
import i10 from './../../../assets/img/i10.jpg'


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HomeMovies({loggedUser}){
    const [ready, setReady] = useState(false)
    const [ready2, setReady2] = useState(false)
    const [break2, setBreak2] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    if (break2 == false) {
        setBreak2(true)
        setReady(true)
        setTimeout(() => {
            setReady2(true)
        }, 1000);
    }

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
            { ready &&
            <div className={`d-flex flex-column right-screen`}>
                <div className={`d-flex align-items-center justify-content-right right-header`}>
                    <p className="mt-0 mb-0 mr-8 a-light-white text-big">Usuario</p>
                </div>
                <div className={`d-flex flex-column gray-layout`}>
                    
                </div>
            </div>
            }
            <Loading hide={ready2}></Loading>
        </>
    )
}