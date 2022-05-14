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

export default class AdministracionUsuario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            perfiles: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8000/users/all`)
          .then(response => response.json())
          .then((perfiles) => {
              console.log(perfiles, "Esto da la API")
            this.setState({perfiles: perfiles})
          })
    }

    render(){
        return(
            <>
                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        {/* Contenido de cada pagina */}
                        <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                            <p className={`a-light-dark l mt-0 mb-0`}>Mostrando usuarios</p>
                            <div className={`d-flex`}>
                                <DropMenuButton classNames={`mr-5`} opciones={['Todos', 'Trabajadores', 'Admins', 'Super admins']}></DropMenuButton>
                                <SalmonButton texto={`Aplicar filtros`} ></SalmonButton>
                            </div>
                        </div>
                        <div className={`d-flex flex-column align-items-center`}>
                            <PaymentCard type={`usuarios`} users={this.state.perfiles} loggedUser={this.props.loggedUser}></PaymentCard>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}