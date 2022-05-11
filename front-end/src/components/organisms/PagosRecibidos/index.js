//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import { validateUser } from "../../../services";

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'
import DropMenuButton from '../../atoms/DropMenuButton/index'
import SalmonButton from '../../atoms/SalmonButton/index'
import Loading from '../../molecules/Loading/index'
import PaymentCard from '../../molecules/ObjectCard/index'

//Imágenes


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default class PagosRecibidos extends React.Component {
    constructor(props){
        super(props);
        this.payments = [
            {
                id: `1`, 
                status:'aprobado', 
                date: '27/03/2022', 
                ordenante: '020302030203020302', 
                beneficiario: '010501050105010501'
            },
            {
                id: `2`, 
                status:'rechazado', 
                date: '27/03/2022', 
                ordenante: '123456789123456789', 
                beneficiario: '001122334455667788'
            },
            {
                id: `3`, 
                status:'pendiente', 
                date: '27/03/2022', 
                ordenante: '615161516151615161', 
                beneficiario: '010501050105010501'
            }
        ];
    }


    render(){
        return (
            <>

                    <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                        <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                            {/* Contenido de cada pagina */}
                            <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                                <p className={`a-light-dark l mt-0 mb-0`}>Mostrando pagos</p>
                                <div className={`d-flex`}>
                                    <DropMenuButton classNames={`mr-5`} opciones={['27/03/2022', '26/03/2022', '25/03/2022']}></DropMenuButton>
                                    <DropMenuButton classNames={`mr-5`} opciones={['Todos', 'Aprobados', 'Rechazados', 'Pendientes']}></DropMenuButton>
                                    <SalmonButton texto={`Aplicar filtros`}></SalmonButton>
                                </div>
                            </div>
                            <div className={`d-flex flex-column align-items-center`}>
                                <PaymentCard type={`pagos`} payments={this.payments} loggedUser={this.props.loggedUser}></PaymentCard>
                            </div>
                        </div>
                    </div>
                
            </>
        )
    }
}

    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    
