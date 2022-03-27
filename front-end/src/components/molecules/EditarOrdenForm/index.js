//React
import React, {useState} from "react"
import { Link } from 'react-router-dom'

//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'

//Imágenes
import paymentIcon from './../../../assets/img/receipt.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EditarOrdenForm({type, status, loggedUser}){
    const [ordenante, setOrdenante] = useState();
    const [beneficiario, setBeneficiario] = useState();
    const [divisa, setDivisa] = useState();
    const [monto, setMonto] = useState(false);
    const [montoPesos, setMontoPesos] = useState();

    function printValues(e) {
        e.preventDefault();
        let todos = [ordenante, beneficiario, divisa, monto, montoPesos]
        console.log(todos);
    }

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
            <div className={`d-flex align-items-center`}>
                <img width={50} height={50} src={paymentIcon}></img>
                <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Visualizar orden</p>
            </div>
            <hr className={`hr-gray mt-4 mb-0`}></hr>
            <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Cuenta del ordenante: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='ordenante' value={ordenante} onChange={(e) => setOrdenante(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Cuenta del beneficiario: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='beneficiario' value={beneficiario} onChange={(e) => setBeneficiario(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Divisa: 
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 divisa`} type={'text'} name='divisa' value={divisa} onChange={(e) => setDivisa(e.target.value)}>
                            <option value={`MXN`}>MXN</option>
                            <option value={`USD`}>USD</option>
                            <option value={`CAD`}>CAD</option>
                            <option value={`EUR`}>EUR</option>
                        </select>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Monto total: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='monto' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-10`}>Monto total en MXN: 
                        <input readOnly autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3 montos`} type={'number'} name='montoPesos' value={montoPesos} onChange={(e) => setMontoPesos(e.target.value)}></input>
                </label>
                <div className="d-flex justify-content-space-between mb-5">
                    <SalmonButton funcion={printValues} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Aprobar`} ></SalmonButton>
                    <SalmonButton funcion={printValues} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Rechazar`} ></SalmonButton>
                    <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/pagos-recibidos`}>
                        <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                    </Link>
                </div>
            </form>
            <hr className={`hr-gray mt-4 mb-0`}></hr>
            <p className={`a-light-dark l mt-5 mb-0`}>Interacción del pago</p>
            <p className={`a-light-gray mt-8 mb-0 text-medium`}>- El pago ha sido recibido.</p>
            <p className={`a-light-gray mt-5 mb-0 text-medium`}>- El pago ha pasado la validación de cuentas bancarias.</p>
            <p className={`a-light-gray mt-5 mb-0 text-medium`}>- El pago ha pasado a estatus pendiente.</p>
            <p className={`a-light-gray mt-5 mb-0 text-medium`}>- El pago ha sido aceptado.</p>
            <p className={`a-light-gray mt-5 mb-0 text-medium`}>- El pago ha pasado a estatus aceptado.</p>
        </div>
        </>
    )
}