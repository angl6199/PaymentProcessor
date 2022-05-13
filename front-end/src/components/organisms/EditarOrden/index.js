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
import EditarOrdenForm from "../../molecules/EditarOrdenForm";

//Imágenes



//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default class EditarOrdenPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pago: []
        }
    }

    componentWillMount(){
        fetch(`http://localhost:8000/pagos/getOne/${this.props.id}`)
          .then(response => response.json())
          .then((pago) => {
            console.log(pago, "Esto da la API cuando busco un solo pago")
            this.setState({pago: pago})
        })
    }
    render(){
        return(
            <>
                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        <EditarOrdenForm pago={this.state.pago} loggedUser={this.props.loggedUser}></EditarOrdenForm>
                    </div>
                </div>
            </>
        )
    }
}

/* export default function EditarOrden({loggedUser}){

    return (
        <>
                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        <EditarOrdenForm loggedUser={loggedUser}></EditarOrdenForm>
                    </div>
                </div>
        </>
    )
} */