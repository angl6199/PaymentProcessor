//React
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'
import { crearPago } from "../../../services";

//Imágenes
import paymentIcon from './../../../assets/img/receipt.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function CrearOrdenForm({ type, status, loggedUser }) {
    const [ordenante, setOrdenante] = useState();
    const [beneficiario, setBeneficiario] = useState();
    const [divisa, setDivisa] = useState();
    const [monto, setMonto] = useState(false);
    const [montoPesos, setMontoPesos] = useState();
    const [error, setError] = useState()

    const navigate = useNavigate();

    function crearOrden(e) {
        e.preventDefault();
        let credentials = {
            emailOrdenante: loggedUser.email,
            emailBeneficiario: beneficiario,
            monto: monto
        }

        function displayError() {
            var element = document.getElementById('error-container') 
            element.className = 'error-effect'
    
            setTimeout(() => {
                element.className = ''
            }, 1500);
        }

        crearPago(credentials).then((response) => {
            if (response.data == 'Fondos insuficientes'){
                setError("No cuentas con fondos suficientes")
                displayError()
            }
            if (response.data == 'No hay beneficiario'){
                setError("Beneficiario no válido")
                displayError()
            }
            else if(response.status == 200 && response.data != 'No hay beneficiario' && response.data != 'Fondos insuficientes'){
                window.location.replace(`http://localhost:3000/${loggedUser.nombre}-${loggedUser.apellidos}/pagos-recibidos`)
            }
        })
    }

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img width={50} height={50} src={paymentIcon}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Creación de pago</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email del beneficiario:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='beneficiario' value={beneficiario} onChange={(e) => setBeneficiario(e.target.value)}></input>
                    </label>
                    {/* <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa: 
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 divisa`} type={'text'} name='divisa' value={divisa} onChange={(e) => setDivisa(e.target.value)}>
                            <option value={`MXN`}>MXN</option>
                            <option value={`USD`}>USD</option>
                            <option value={`CAD`}>CAD</option>
                            <option value={`EUR`}>EUR</option>
                        </select>
                </label> */}
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto total:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
                    </label>
                    {/* <label className={`a-light-dark text-big d-flex justify-content-space-between mb-10`}>Monto total en MXN: 
                        <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='montoPesos' value={montoPesos} onChange={(e) => setMontoPesos(e.target.value)}></input>
                </label> */}
                    <SalmonButton funcion={crearOrden} classNames={`text-big justify-content-center lim-boton`} texto={`Crear`} ></SalmonButton>
                </form>
                <div id={`error-container`} className={``}>
                    <div className={`error-container`}>
                        <p className={`a-regular-red`}>{error}</p>
                    </div>
                </div>
            </div>
        </>
    )
}