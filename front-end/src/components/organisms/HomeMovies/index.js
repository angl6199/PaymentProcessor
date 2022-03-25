//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import BlueButton from '../../atoms/BlueButton/index'
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
            <div className={`d-flex flex-column w-90-2`}>
                <div className={`w-90-2`}>
                    <div className={`category d-flex ml-7`}>
                        <p className={`a-regular-white ml-auto mr-auto mt-4 mb-4`}>Colección de Disney +</p>
                    </div>
                </div>
                <div className={`w-100 d-flex`}>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${1}`}><div style={{'backgroundImage': `url(${i1})`}} className={`d-flex film-container ml-7 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Iron Man: El hombre de hierro</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${2}`}><div style={{'backgroundImage': `url(${i2})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Thor: Ragnarok</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${3}`}><div style={{'backgroundImage': `url(${i3})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Capitán América: El primer vengador</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${4}`}><div style={{'backgroundImage': `url(${i4})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Avengers: Era de Ultrón</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${5}`}><div style={{'backgroundImage': `url(${i5})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Guardianes de la galaxia</p></div></div></Link>                    
                </div>
                <div className={`w-90-2 mt-4`}>
                    <div className={`category d-flex ml-7`}>
                        <p className={`a-regular-white ml-auto mr-auto mt-4 mb-4`}>Colección de Star +</p>
                    </div>
                </div>
                <div className={`w-100 d-flex`}>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${6}`}><div style={{'backgroundImage': `url(${i6})`}} className={`d-flex film-container ml-7 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Logan</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${7}`}><div style={{'backgroundImage': `url(${i7})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>El planeta de los simios: Confrontación</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${8}`}><div style={{'backgroundImage': `url(${i8})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Revenant: El renacido</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${9}`}><div style={{'backgroundImage': `url(${i9})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Jojo Rabbit</p></div></div></Link>
                    <Link className={'movieLink text-decoration-none'} to={`/${loggedUser.nombre}-${loggedUser.apellido}/movieTrailer/${10}`}><div style={{'backgroundImage': `url(${i10})`}} className={`d-flex film-container ml-5 mr-2`}><div className={`d-flex animation align-items-center justify-content-center`}><p className={'m-0 a-regular-white'}>Rápidos y furiosos: Hobbs Y Shaw</p></div></div></Link>
                </div>
            </div>
            }
            <Loading hide={ready2}></Loading>
        </>
    )
}