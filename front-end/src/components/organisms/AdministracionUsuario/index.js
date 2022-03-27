//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import DropMenuButton from '../../atoms/DropMenuButton/index'
import SalmonButton from '../../atoms/SalmonButton/index'
import Loading from '../../molecules/Loading/index'
import PaymentCard from '../../molecules/ObjectCard/index'

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AdministracionUsuario({loggedUser}){
    const perfiles = [
        {
            id: `1`, 
            rol:'trabajador', 
            email: 'carlos.andres@gmail.com', 
            nombres: 'Carlos Andres Carlos', 
            apellidos: 'Conde Besil'
        },
        {
            id: `2`, 
            rol:'admin', 
            email: 'javier.arturo@gmail.com', 
            nombres: 'Javier Arturo', 
            apellidos: 'Flores Zavala'
        },
        {
            id: `3`, 
            rol:'superadmin', 
            email: 'angel.heredia@gmail.com', 
            nombres: 'Angel', 
            apellidos: 'Heredia Vazquez'
        }
    ];
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

    function test(e) {
        e.preventDefault();
        console.log('clickeando boton salmon')
    }

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
            { ready &&
                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        {/* Contenido de cada pagina */}
                        <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                            <p className={`a-light-dark l mt-0 mb-0`}>Mostrando usuarios</p>
                            <div className={`d-flex`}>
                                <DropMenuButton classNames={`mr-5`} opciones={['Todos', 'Trabajadores', 'Admins', 'Super admins']}></DropMenuButton>
                                <SalmonButton texto={`Aplicar filtros`} funcion={test}></SalmonButton>
                            </div>
                        </div>
                        <div className={`d-flex flex-column align-items-center`}>
                            <PaymentCard type={`usuarios`} users={perfiles}></PaymentCard>
                        </div>
                    </div>
                </div>
            }
            <Loading hide={ready2}></Loading>
        </>
    )
}