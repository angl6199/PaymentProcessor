//React
import React, {useState} from "react"

//Componentes

//Imágenes
import approved from './../../../assets/img/approved.png'
import rejected from './../../../assets/img/rejected.png'
import pending from './../../../assets/img/pending.png'
import worker from './../../../assets/img/worker.png'
import admin from './../../../assets/img/admin.png'
import superadmin from './../../../assets/img/superadmin.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';
import { create } from "@mui/material/styles/createTransitions"

function createUserCards(users) {
    console.log(users, 'Esto recibo de users')
    let cards = users.map((i) => 
    <>
        <div className={`d-flex mb-5 pl-6 pr-6 pt-4 pb-4 align-items-center box-shadow-gr-bg object-card-body users`}>
            <img width={50} height={50} className={`mr-10`} src={i.rol == 'trabajador' ? worker : i.rol == 'admin' ? admin : superadmin}></img>
            <div className={`d-flex flex-column data-container`}>
                <table>
                    <tr>
                        <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Id Usuario: <span className={`a-light-dark text-medium`}>{i.id}</span></p></td>
                        <td className={`adjust-rol`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Rol: <span className={`a-light-dark text-medium`}>{i.rol}</span></p></td>
                        <td><p className={`mt-0 mb-0 a-bold-black text-big`}>Email: <span className={`a-light-dark text-medium`}>{i.email}</span></p></td>
                    </tr>
                </table>
                <table className={`mt-2`}>
                    <tr>
                        <td className="adjust-apellido"><p className={`mt-0 mb-0 a-bold-black text-big`}>Nombre(s): <span className={`a-light-dark text-medium`}>{i.nombres}</span></p></td>
                        <td><p className={`mt-0 mb-0 a-bold-black text-big `}>Apellido(s): <span className={`a-light-dark text-medium`}>{i.apellidos}</span></p></td>
                    </tr>
                </table>
            </div>
        </div>
    </>
    );
    return cards;
}

function createPaymentCards(payments) {
    console.log(payments, 'Esto recibo de payments')
    let cards = payments.map((i) => 
        <div className={`d-flex mb-5 pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
            <img width={50} height={50} className={`mr-10`} src={i.status == 'aprobado' ? approved : i.status == 'rechazado' ? rejected : pending}></img>
            <div className={`d-flex flex-column`}>
                <table>
                    <tr>
                        <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Id Pago: <span className={`a-light-dark text-medium`}>{i.id}</span></p></td>
                        <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Estado: <span className={`a-light-dark text-medium`}>{i.status}</span></p></td>
                        <td><p className={`mt-0 mb-0 a-bold-black text-big`}>Fecha: <span className={`a-light-dark text-medium`}>{i.date}</span></p></td>
                    </tr>
                </table>
                <table className={`mt-2`}>
                    <tr>
                        <td className={`adjust-cuenta`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Cuenta origen: <span className={`a-light-dark text-medium`}>{i.ordenante}</span></p></td>
                        <td className={``}><p className={`mt-0 mb-0 ml-12 a-bold-black text-big`}>Cuenta destino: <span className={`a-light-dark text-medium`}>{i.beneficiario}</span></p></td>
                    </tr>
                </table>
            </div>
        </div>
    );
    return cards;
}

export default function ObjectCard({type, users, payments}){

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        {type == 'usuarios' ?
            /* Tarjeta para usuarios */
            (createUserCards(users))
        :
            /* Tarjeta para usuarios */
            (createPaymentCards(payments))
        }
        </>
    )
}