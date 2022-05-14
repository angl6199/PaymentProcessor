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
import EditarUsuarioForm from "../../molecules/EditarUsuarioForm";

//Imágenes



//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default class EditarUsuario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8000/users/getOne/${this.props.id_Editado}`)
          .then(response => response.json())
          .then((usuario) => {
              console.log(usuario, "Esto da la API")
            this.setState({usuario: usuario})
          })
    }

    render(){
        return(
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        {/* Contenido de cada pagina */}
                        <EditarUsuarioForm targetUser={this.props.id_Editado} loggedUser={this.state.usuario}></EditarUsuarioForm>
                    </div>
            </div>
        )
    }
}