//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import BlueButton from './../../atoms/BlueButton/index'
import Loading from './../../molecules/Loading/index'

//Imágenes
import Conde from './../../../assets/img/Conde.jpeg'
import Heredia from './../../../assets/img/Heredia.jpeg'
import Javier from './../../../assets/img/Javier.jpeg'
import Pago from './../../../assets/img/pago.png'


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Profiles({loggedUser, setLoggedUser}){

    const [ready, setReady] = useState(true)
    const [ready2, setReady2] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');


    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        { ready &&
        <>
            <div className={`teamform`}>
                <div className={`card1 d-flex box-shadow-gr-nm`}>
                    <p className={'a-medium-black h3 mt-4 mb-4'}>Equipo Desarrollador</p>
                </div>
                <div className={`d-flex space-between mt-1`}>
                    <div className={`d-flex box-shadow-gr-nm mt-5 flex-column card-3`}>
                        <div className={'pp-container'}><img width={'100%'} height={'100%'} src={Heredia}></img></div>
                        <div className={''}><p className={'a-regular-black text-medium mt-4 mb-4 ml-2'}>Ángel Heredia Vázquez</p></div>
                        
                    </div>
                    <div className={`d-flex box-shadow-gr-nm mt-5 flex-column card-3`}>
                        <div className={'pp-container'}><img width={'100%'} height={'100%'} src={Javier}></img></div>
                        <div className={' d-flex'}><p className={'a-regular-black text-medium mt-4 mb-4 ml-auto mr-auto'}>Javier Flores Zavala</p></div>
                    </div>
                    <div className={`d-flex box-shadow-gr-nm mt-5 flex-column card-3`}>
                        <div className={'pp-container'}><img width={'100%'} height={'100%'} src={Conde}></img></div>
                        <div className={' d-flex'}><p className={'a-regular-black text-medium mt-4 mb-4 ml-auto mr-auto'}>Carlos Conde Besil</p></div>
                    </div>
                </div>
            </div>
            </>
        }
        <>

        </>
        </>
    )
}