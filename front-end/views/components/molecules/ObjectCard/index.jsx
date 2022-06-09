//React
import React from "react"

function formatoNumero(num) {
    num = parseFloat(num)
    return num.toLocaleString('en')
}

function createUserCards(users, loggedUser) {
    let cards = users.map((i) =>
        <a className={`text-decoration-none mb-5`} href={loggedUser.rol == 'Admin' ? `/admin/${loggedUser.nombre}-${loggedUser.apellido}/${i._id}/usuario` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellido}/${i._id}/usuario`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 align-items-center box-shadow-gr-bg object-card-body users`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.rol == 'Cliente' ? '../../public/assets/img/worker.png' : i.rol == 'Admin' ? '../../public/assets/img/admin.png' : '../../public/assets/img/superadmin.png'}></img>
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
        </a>
    );
    return cards;
}

function createPaymentCards(payments, loggedUser) {
    let cards = payments.map((i) =>
        <a className={`text-decoration-none mb-5`} href={loggedUser.rol == "Cliente" ? `/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/pago` : loggedUser.rol == "Admin" ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/pago` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/pago`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.estado === 'Completado' ? '../../public/assets/img/approved.png' : i.estado === 'Rechazado' ? '../../public/assets/img/rejected.png' : '../../public/assets/img/pending.png'}></img>
                <div className={`d-flex flex-column`}>
                    <table>
                        <tr>
                            <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Id Pago: <span className={`a-light-dark text-medium`}>{i._id}</span></p></td>
                            <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Divisa: <span className={`a-light-dark text-medium`}>{i.divisa}</span></p></td>
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
        </a>
    );
    return cards;
}

function createDivisasCards(divisas, loggedUser) {
    let cards = divisas.map((i) =>
        <a className={`text-decoration-none mb-5`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/${i.code}/divisa`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.active === true ? '../../public/assets/img/approved.png' : '../../public/assets/img/rejected.png'}></img>
                <div className={`d-flex flex-column`}>
                    <table>
                        <tr>
                            <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Siglas: <span className={`a-light-dark text-medium`}>{i.code}</span></p></td>
                            <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Estado: <span className={`a-light-dark text-medium`}>{i.active == true ? 'Activada' : 'Desactivada'}</span></p></td>
                        </tr>
                    </table>
                    <table className={`mt-2`}>
                        <tr>
                            <td className={`adjust-cuenta`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Descripción: <span className={`a-light-dark text-medium`}>{i.description}</span></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </a>
    );
    return cards;
}

function createAbonoCards(abonos, loggedUser) {
    let cards = abonos.map((i) =>
        <a className={`text-decoration-none mb-5`} href={loggedUser.rol == "Cliente" ? `/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/abono` : loggedUser.rol == "Admin" ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/abono` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/${i._id}/abono`}>
            <div className={`d-flex pl-6 pr-6 pt-4 pb-4 justify-content-space-around align-items-center box-shadow-gr-bg object-card-body`}>
                <img alt="" width={50} height={50} className={`mr-10`} src={i.estado === 'Completado' ? '../../public/assets/img/approved.png' : i.estado === 'Rechazado' ? '../../public/assets/img/rejected.png' : '../../public/assets/img/pending.png'}></img>
                <div className={`d-flex flex-column`}>
                    <table>
                        <tr>
                            <td className={`adjust-id`}><p className={`mt-0 mb-0 a-bold-black text-big adjust-id`}>Id Pago: <span className={`a-light-dark text-medium`}>{i._id}</span></p></td>
                            <td className={`adjust-status`}><p className={`mt-0 mb-0 a-bold-black text-big`}>Divisa: <span className={`a-light-dark text-medium`}>{i.divisa}</span></p></td>
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
        </a>
    );
    return cards;
}

export default function ObjectCard({ type, users, payments, cuentas, divisas, loggedUser }) {

    return (
        <>
            {type === 'usuarios' ?
                (createUserCards(users, loggedUser))
                : type === 'abonos' ?
                    (createAbonoCards(payments, loggedUser))
                    : type === 'divisas' ?
                        (createDivisasCards(divisas, loggedUser))
                        :
                        (createPaymentCards(payments, loggedUser))
            }
        </>
    )
}