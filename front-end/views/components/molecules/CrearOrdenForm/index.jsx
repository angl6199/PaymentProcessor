//React
import React, { useState } from "react"

//Componentes
import SalmonButton from '../../atoms/SalmonButton/index'

export default function CrearOrdenForm({ loggedUser, errorInformation, final, divisas, precioPorDivisa, divisaApesos, lastform }) {
    const [beneficiario, setBeneficiario] = useState();
    const [monto, setMonto] = useState();
    const [error, setError] = useState(errorInformation)
    const [divisa, setDivisa] = useState()
    const [verified, setVerified] = useState(final)
    const [precioPorLaDivisa, setPrecioPorLaDivisa] = useState(precioPorDivisa)
    const [divisaApesosFinal, setDivisaApesosFinal] = useState(divisaApesos)

    function displayDivisas() {
        if (divisas.length != 0) {
            let divisasDisplay = divisas.map((i) =>
                <>
                    {i.active == true &&
                        <option value={i.code}>{i.code}</option>
                    }
                </>
            );
            return divisasDisplay;
        }
        return <></>
    }

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={'../../../public/assets/img/receipt.png'}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Creación de pago</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                {verified == false ?
                    <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`} action={`/${loggedUser.rol == "Cliente" ? 'cliente' : loggedUser.rol == "Admin" ? 'admin' : 'superadmin'}/${loggedUser.nombre}-${loggedUser.apellidos}/validar-orden`} method="POST">
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email del beneficiario:
                            <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='beneficiario' value={beneficiario} onChange={(e) => setBeneficiario(e.target.value)}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa:
                            <select className={`text-normal a-light-dark crear-orden-input ml-0 divisa`} type={'text'} name='divisa' value={divisa} onChange={(e) => setDivisa(e)}>
                                <option value={"MXN"}>MXN</option>
                                {displayDivisas()}
                            </select>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto:
                            <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} step={"0.01"} type={'number'} name='monto' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
                        </label>
                        <div className={`d-flex`}>
                            <SalmonButton classNames={`text-big justify-content-center lim-boton mr-5 pl-5 pr-5`} texto={`Continuar`} ></SalmonButton>
                            <a className={`text-decoration-none`} href={`./pagos-realizados`}>
                                <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                            </a>
                        </div>
                    </form>
                    :
                    <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`} action={`/${loggedUser.rol == "Cliente" ? 'cliente' : loggedUser.rol == "Admin" ? 'admin' : 'superadmin'}/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden`} method="POST">
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email del beneficiario:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='beneficiario' value={lastform.emailBeneficiario}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa:
                            <select className={`text-normal a-light-dark crear-orden-input ml-0 divisa`} type={'text'} name='divisa' value={lastform.divisa}>
                                <option value={lastform.divisa}>{lastform.divisa}</option>
                            </select>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} step={0.1} type={'number'} name='monto' value={lastform.monto}></input>
                        </label>
                        <hr className={`hr-gray mt-0 mb-0`}></hr>
                        <p className={`a-light-dark h3 mt-4 mb-6`}>Conversiones</p>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mt-2 mb-6`}>Precio por divisa:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={lastform.divisa != 'MXN' ? 'number' : 'text'} name='precioPorDivisa' value={lastform.divisa != "MXN" ? precioPorLaDivisa : "No aplica"} onChange={(e) => setPrecioPorLaDivisa(e.target.value)}></input>
                        </label>
                        <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Precio total en pesos:
                            <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='divisaApesos' value={lastform.divisa != "MXN" ? divisaApesosFinal : lastform.monto} onChange={(e) => setDivisaApesosFinal(e.target.value)}></input>
                        </label>
                        <div className={`d-flex mt-2`}>
                            <SalmonButton classNames={`text-big justify-content-center lim-boton mr-5 pl-5 pr-5`} texto={`Confirmar`} ></SalmonButton>
                            <a className={`text-decoration-none`} href={loggedUser.rol == 'Cliente' ? `/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden` : loggedUser.rol == 'Admin' ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden`}>
                                <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions mr-5`} texto={`Cancelar`} ></SalmonButton>
                            </a>
                            <a className={`text-decoration-none`} href={`./pagos-realizados`}>
                                <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                            </a>
                        </div>
                    </form>}

                {error != null &&
                    < div id={`error-container`} className={`error-effect`}>
                        <div className={`error-container`}>
                            <p className={`a-regular-red`}>{error}</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}