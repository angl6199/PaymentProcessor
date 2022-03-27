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

export default function PagosRecibidos({loggedUser}){
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
                            <p className={`a-light-dark l mt-0 mb-0`}>Mostrando pagos</p>
                            <div className={`d-flex`}>
                                <DropMenuButton classNames={`mr-5`} opciones={['27/03/2022', '26/03/2022', '25/03/2022']}></DropMenuButton>
                                <DropMenuButton classNames={`mr-5`} opciones={['Todos', 'Aprobados', 'Rechazados', 'Pendientes']}></DropMenuButton>
                                <SalmonButton texto={`Aplicar filtros`} funcion={test}></SalmonButton>
                            </div>
                        </div>
                        <div className={`d-flex flex-column`}>
                            <PaymentCard status={`aprobado`}></PaymentCard>
                            <PaymentCard status={`rechazado`}></PaymentCard>
                            <PaymentCard status={`pending`}></PaymentCard>
                            <PaymentCard status={`aprobado`}></PaymentCard>
                            <PaymentCard status={`rechazado`}></PaymentCard>
                            <PaymentCard status={`pending`}></PaymentCard>
                        </div>
                    </div>
                </div>
            }
            <Loading hide={ready2}></Loading>
        </>
    )
}