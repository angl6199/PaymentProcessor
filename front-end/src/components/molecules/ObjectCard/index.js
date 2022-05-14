//React
import React from "react"
import { Link } from 'react-router-dom'

//Imágenes
import approved from './../../../assets/img/approved.png'
import rejected from './../../../assets/img/rejected.png'
import pending from './../../../assets/img/pending.png'
import worker from './../../../assets/img/worker.png'
import admin from './../../../assets/img/admin.png'
import superadmin from './../../../assets/img/superadmin.png'

function formatoNumero(num) {
    num = parseFloat(num)
    return num.toLocaleString('en')
}

function createUserCards(users, loggedUser) {
    let cards = users.map((i) =>
        <Link className={`text-decoration-none mb-5`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/editar-usuario/${i._id}`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 align-items-center box-shadow-gr-bg object-card-body users`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.rol === 'client' ? worker : i.rol === 'admin' ? admin : superadmin}></img>
                <div className={`d-flex flex-column data-container`}>
                    <table>
                        <tr>
                            <td className={`adjust-id2`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Id Usuario: <span className={`a-light-dark text-medium`}>{i._id}</span></p></td>
                            <td className={`adjust-rol`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Rol: <span className={`a-light-dark text-medium`}>{i.rol}</span></p></td>
                        </tr>
                        <tr>
                            <td><p className={`mt-2 mb-0 a-bold-black text-big`}>Email: <span className={`a-light-dark text-medium`}>{i.email}</span></p></td>
                        </tr>
                    </table>
                    <table className={`mt-2`}>
                        <tr>
                            <td className="adjust-apellido"><p className={`mt-0 mb-0 a-bold-black text-big`}>Nombre(s): <span className={`a-light-dark text-medium`}>{i.nombre}</span></p></td>
                            <td><p className={`mt-0 mb-0 a-bold-black text-big `}>Apellido(s): <span className={`a-light-dark text-medium`}>{i.apellidos}</span></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </Link>
    );
    return cards;
}

function createPaymentCards(payments, loggedUser) {
    let cards = payments.map((i) =>
        <Link className={`text-decoration-none mb-5`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/editar-orden/${i._id}`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.estado === 'Completado' ? approved : i.estado === 'Rechazado' ? rejected : pending}></img>
                <div className={`d-flex flex-column`}>
                    <table>
                        <tr>
                            <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Id Pago: <span className={`a-light-dark text-medium`}>{i._id}</span></p></td>
                            <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Estado: <span className={`a-light-dark text-medium`}>{i.estado}</span></p></td>
                        </tr>
                    </table>
                    <table className={`mt-2`}>
                        <tr>
                            <td className={`adjust-cuenta`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Cuenta destino: <span className={`a-light-dark text-medium`}>{i._beneficiarioId}</span></p></td>
                            <td className={`adjust-monto`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Monto: <span className={`a-light-dark text-medium`}>{formatoNumero(i.monto)}</span></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </Link>
    );
    return cards;
}

function createAbonoCards(abonos, loggedUser) {
    let cards = abonos.map((i) =>
        <Link className={`text-decoration-none mb-5`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/editar-orden/${i._id}`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.estado === 'Completado' ? approved : i.estado === 'Rechazado' ? rejected : pending}></img>
                <div className={`d-flex flex-column`}>
                    <table>
                        <tr>
                            <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Id Pago: <span className={`a-light-dark text-medium`}>{i._id}</span></p></td>
                            <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Estado: <span className={`a-light-dark text-medium`}>{i.estado}</span></p></td>
                        </tr>
                    </table>
                    <table className={`mt-2`}>
                        <tr>
                            <td className={`adjust-cuenta`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Cuenta origen: <span className={`a-light-dark text-medium`}>{i._ordenanteId}</span></p></td>
                            <td className={`adjust-monto`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Monto: <span className={`a-light-dark text-medium`}>{formatoNumero(i.monto)}</span></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </Link>
    );
    return cards;
}

export default function ObjectCard({ type, users, payments, cuentas, loggedUser }) {

    return (
        <>
            {type === 'usuarios' ?
                /* Tarjeta para usuarios */
                (createUserCards(users, loggedUser))

                : type === 'abonos' ?
                    /* Tarjeta para usuarios */
                    (createAbonoCards(payments, loggedUser))
                    :
                    /* Tarjeta para usuarios */
                    (createPaymentCards(payments, loggedUser))
            }
        </>
    )
}