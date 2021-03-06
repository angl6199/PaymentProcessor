//React
import React, { useState } from "react"

//Componentes
import SalmonButton from '../../atoms/SalmonButton/index'

export default function CrearDivisaForm({ loggedUser, errorInformation }) {
    const [code, setCode] = useState()
    const [description, setDescription] = useState()
    const [active, setActive] = useState()
    const [error, setError] = useState(errorInformation)

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={'../../../public/assets/img/receipt.png'}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato registro de divisa</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`} action={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-divisa`} method="POST">
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>{"Siglas (3 dígitos): "}
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='code' value={code} onChange={(e) => setCode(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Descripción:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Estado:
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 rol`} type={'text'} name='active' value={active} onChange={(e) => setActive(e.target.value)}>
                            <option value={`Activada`}>Activada</option>
                            <option value={`Desactivada`}>Desactivada</option>
                        </select>
                    </label>
                    <SalmonButton tipo={'submit'} classNames={`text-big justify-content-center lim-boton`} texto={`Crear`} ></SalmonButton>
                </form>
                {error != null &&
                    <div id={`error-container`} className={`error-effect`}>
                        <div className={`error-container`}>
                            <p className={`a-regular-red`}>{error}</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}