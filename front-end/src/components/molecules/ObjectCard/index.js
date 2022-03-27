//React
import React, {useState} from "react"

//Componentes

//Imágenes
import approved from './../../../assets/img/approved.png'
import rejected from './../../../assets/img/rejected.png'
import pending from './../../../assets/img/pending.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ObjectCard({type, status}){

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex mb-5 pl-6 pr-6 pt-4 pb-5 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
            <img width={50} height={50} className={``} src={status == 'aprobado' ? approved : status == 'rechazado' ? rejected : pending}></img>
            <div className={`d-flex flex-column`}>
                <div className={`d-flex justify-content-space-between`}>
                    <p className={`mt-0 mb-0 a-bold-black text-big`}>Id Pago: <span className={`a-light-dark text-medium`}>000000001</span></p>
                    <p className={`mt-0 mb-0 ml-12 a-bold-black text-big`}>Estado: <span className={`a-light-dark text-medium`}>Approved</span></p>
                    <p className={`mt-0 mb-0 ml-12 a-bold-black text-big`}>Fecha: <span className={`a-light-dark text-medium`}>27/03/2022</span></p>
                </div>
                <div className={`d-flex justify-content-space-between mt-3`}>
                    <p className={`mt-0 mb-0 a-bold-black text-big`}>Cuenta origen: <span className={`a-light-dark text-medium`}>010203040506070809</span></p>
                    <p className={`mt-0 mb-0 ml-12 a-bold-black text-big`}>Cuenta destino: <span className={`a-light-dark text-medium`}>010203040506070809</span></p>
                </div>
            </div>
        </div>
        </>
    )
}