//React
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { editarUsuario } from "../../../services"

//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'

//Imágenes
import usersIcon from './../../../assets/img/users-icon.png'

export default function EditarUsuarioForm({ type, status, loggedUser, targetUser }) {
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [rol, setRol] = useState();
    const [email, setEmail] = useState();
    const [changed, setChanged] = useState(false)
    const [error, setError] = useState()

    function sendUpdate(e) {
        e.preventDefault();
        let data = {
            nombre: nombres === undefined ? loggedUser.nombre : nombres,
            apellidos: apellidos === undefined ? loggedUser.apellidos : apellidos,
            rol: changed === true ? rol : loggedUser.rol,
            email: email === undefined ? loggedUser.email : email
        }

        editarUsuario(data, targetUser).then((response) => {
            if (response.data === 'Campos mal') {
                setError("Campos no válidos")
                displayError()
            }
            else if (response.status === 200 && response.data !== 'Campos mal') {
                window.location.replace(`http://localhost:3000/${loggedUser.nombre}-${loggedUser.apellidos}/administracion-usuarios`)
            }
        })

    }

    function displayError() {
        var element = document.getElementById('error-container')
        element.className = 'error-effect'

        setTimeout(() => {
            element.className = ''
        }, 1500);
    }

    function returnOptions() {
        if (loggedUser.rol === "Cliente") {
            return (
                <>
                    <option value={`Cliente`}>Cliente</option>
                    <option value={`Admin`}>Admin</option>
                </>
            )
        } else {
            return (
                <>
                    <option value={`Trabajador`}>Trabajador</option>
                    <option value={`Admin`}>Admin</option>
                </>
            )
        }
    }

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={usersIcon}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato edición usuario</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Nombre(s):
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='nombres' value={nombres === undefined ? loggedUser.nombre : nombres} onChange={(e) => setNombres(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Apellido(s):
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='apellidos' value={apellidos === undefined ? loggedUser.apellidos : apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Rol:
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 rol`} type={'text'} name='rol' value={rol} onChange={(e) => setRol(e)}>
                            {returnOptions()}
                        </select>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='email' value={email === undefined ? loggedUser.email : email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <div className="d-flex justify-content-space-between">
                        <SalmonButton tipo={"submit"} funcion={sendUpdate} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Actualizar`} ></SalmonButton>
                        <SalmonButton classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Eliminar`} ></SalmonButton>
                        <Link className={`text-decoration-none`} to={`/${loggedUser.nombre}-${loggedUser.apellido}/administracion-usuarios`}>
                            <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                        </Link>
                    </div>
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