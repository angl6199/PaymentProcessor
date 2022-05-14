//React
import React, { useState } from "react"

//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'
import { crearPago } from "../../../services";

//Imágenes
import paymentIcon from './../../../assets/img/receipt.png'

export default function CrearOrdenForm({ loggedUser }) {
    const [beneficiario, setBeneficiario] = useState();
    const [monto, setMonto] = useState(false);
    const [error, setError] = useState()

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
            if (response.data === 'Fondos insuficientes') {
                setError("No cuentas con fondos suficientes")
                displayError()
            }
            if (response.data === 'No hay beneficiario') {
                setError("Beneficiario no válido")
                displayError()
            }
            else if (response.status === 200 && response.data !== 'No hay beneficiario' && response.data !== 'Fondos insuficientes') {
                window.location.replace(`http://localhost:3000/${loggedUser.nombre}-${loggedUser.apellidos}/pagos-recibidos`)
            }
        })
    }

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={paymentIcon}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Creación de pago</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email del beneficiario:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='beneficiario' value={beneficiario} onChange={(e) => setBeneficiario(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto total:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
                    </label>
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