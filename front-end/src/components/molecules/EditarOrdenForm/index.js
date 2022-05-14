//React
import React from "react"

//Imágenes
import paymentIcon from './../../../assets/img/receipt.png'

export default function EditarOrdenForm({ loggedUser, pago }) {
    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={paymentIcon}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Visualizar orden</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Cuenta del beneficiario:
                        <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='beneficiario' value={pago._beneficiarioId}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto total:
                        <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={pago.monto} ></input>
                    </label>
                </form>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <p className={`a-light-dark l mt-5 mb-0`}>Interacción del pago</p>
                <p className={`a-light-gray mt-8 mb-0 text-medium`}>- El pago ha sido completado exitósamente.</p>

            </div>
        </>
    )
}