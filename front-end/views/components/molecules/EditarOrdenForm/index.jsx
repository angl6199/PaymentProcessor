//React
import React from "react"

//Componentes
import SalmonButton from '../../atoms/SalmonButton/index'

export default function EditarOrdenForm({ pago, tipo, loggedUser }) {
    return (
        <>
            {tipo == 1 ?
                <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                    <div className={`d-flex align-items-center`}>
                        <img alt="" width={50} height={50} src={'./../../../public/assets/img/receipt.png'}></img>
                        <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Visualizar orden</p>
                    </div>
                    <hr className={`hr-gray mt-4 mb-0`}></hr>
                    <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Cuenta del beneficiario:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='beneficiario' value={pago._beneficiarioId}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa:
                            <select className={`text-normal a-light-dark crear-orden-input ml-0 divisa`} type={'text'} name='divisa' value={pago.divisa}>
                                <option value={pago.divisa}>{pago.divisa}</option>
                            </select>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={pago.monto}></input>
                        </label>
                        <hr className={`hr-gray mt-0 mb-0`}></hr>
                        <p className={`a-light-dark h3 mt-4 mb-6`}>Conversiones</p>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mt-2 mb-6`}>Precio por divisa:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={pago.divisa != "MXN" ? 'number' : 'text'} name='precioPorDivisa' value={pago.divisa != "MXN" ? pago.precioPorDivisa : "No aplica"}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Precio total en pesos:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='divisaApesos' value={pago.divisaApesos}></input>
                        </label>
                    </form>
                    <hr className={`hr-gray mt-4 mb-0`}></hr>
                    <p className={`a-light-dark l mt-5 mb-0`}>Interacción del pago</p>
                    <p className={`a-light-gray mt-8 mb-0 text-medium`}>- El pago ha sido completado exitósamente.</p>
                    <div className={`d-flex mt-6`}>
                        <a className={`text-decoration-none`} href={`./../pagos-realizados`}>
                            <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                        </a>
                    </div>
                </div>
                :
                <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                    <div className={`d-flex align-items-center`}>
                        <img alt="" width={50} height={50} src={'./../../../public/assets/img/receipt.png'}></img>
                        <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Visualizar orden</p>
                    </div>
                    <hr className={`hr-gray mt-4 mb-0`}></hr>
                    <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Cuenta del ordenante:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='ordenante' value={pago._ordenanteId}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa:
                            <select className={`text-normal a-light-dark crear-orden-input ml-0 divisa`} type={'text'} name='divisa' value={pago.divisa}>
                                <option value={pago.divisa}>{pago.divisa}</option>
                            </select>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={pago.monto}></input>
                        </label>
                        <hr className={`hr-gray mt-0 mb-0`}></hr>
                        <p className={`a-light-dark h3 mt-4 mb-6`}>Conversiones</p>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mt-2 mb-6`}>Precio por divisa:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={pago.divisa != "MXN" ? 'number' : 'text'} name='precioPorDivisa' value={pago.divisa != "MXN" ? pago.precioPorDivisa : "No aplica"}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Precio total en pesos:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='divisaApesos' value={pago.divisaApesos}></input>
                        </label>
                    </form>
                    <hr className={`hr-gray mt-4 mb-0`}></hr>
                    <p className={`a-light-dark l mt-5 mb-0`}>Interacción del abono</p>
                    <p className={`a-light-gray mt-8 mb-0 text-medium`}>- El abono ha sido completado exitósamente.</p>
                    <div className={`d-flex mt-6`}>
                        <a className={`text-decoration-none`} href={loggedUser.rol == 'Cliente' ? `/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos` : loggedUser.rol == 'Admin' ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos`}>
                            <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                        </a>
                    </div>
                </div>
            }
        </>
    )
}