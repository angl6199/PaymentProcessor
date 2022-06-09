//React
import React, { useState } from "react"

//Componentes
import SalmonButton from '../../atoms/SalmonButton/index'

export default function EditarUsuarioForm({ loggedUser, targetUser, errorInformation }) {
    const [nombres, setNombres] = useState(targetUser.nombre);
    const [apellidos, setApellidos] = useState(targetUser.apellidos);
    const [rol, setRol] = useState(targetUser.rol);
    const [email, setEmail] = useState(targetUser.email);
    const [error, setError] = useState(errorInformation)

    function returnOptions() {
        if (targetUser.rol === "Cliente") {
            return (
                <>
                    <option value={`Cliente`}>Cliente</option>
                    <option value={`Admin`}>Admin</option>
                    {loggedUser.rol == "Superadmin" &&
                        <option value={`Superadmin`}>Superadmin</option>
                    }
                </>
            )
        }
        if (targetUser.rol === "Admin") {
            return (
                <>
                    <option value={`Admin`}>Admin</option>
                    <option value={`Cliente`}>Cliente</option>
                    {loggedUser.rol == "Superadmin" &&
                        <option value={`Superadmin`}>Superadmin</option>
                    }
                </>
            )
        }
        else {
            return (
                <>
                    <option value={`Superadmin`}>Superadmin</option>
                    <option value={`Admin`}>Admin</option>
                    <option value={`Cliente`}>Cliente</option>
                </>
            )
        }
    }

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={'/public/assets/img/users-icon.png'}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato edición usuario</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`} action={loggedUser.rol == "Admin" ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/${targetUser._id}/usuario` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/${targetUser._id}/usuario`} method="POST">
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Nombre(s):
                        <input readOnly={loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin") ? false : true} autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='nombres' value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Apellido(s):
                        <input readOnly={loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin") ? false : true} autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Rol:
                        {loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin") ?
                            <select className={`text-normal a-light-dark crear-orden-input ml-3 rol`} type={'text'} name='rol' value={rol} onChange={(e) => setRol(e)}>
                                {returnOptions()}
                            </select>
                            :
                            <input readOnly={true} autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='rol' value={rol} onChange={(e) => setRol(e.target.value)}></input>
                        }

                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email:
                        <input readOnly={loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin") ? false : true} autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <div className="d-flex justify-content-space-between">
                        {(loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin")) &&
                            <>
                                <SalmonButton tipo={"submit"} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Actualizar`} ></SalmonButton>
                            </>
                        }

                    </div>
                </form>
                <div className={`d-flex mt-6`}>
                    {(loggedUser._id != targetUser._id && (loggedUser.rol == "Superadmin" || targetUser.rol != "Superadmin")) &&
                        <form className={`d-flex mr-5`} action={`/${loggedUser.rol == "Admin" ? "admin" : "superadmin"}/${loggedUser.nombre}-${loggedUser.apellidos}/${targetUser._id}/eliminar-usuario`} method="POST">
                            <SalmonButton tipo={'submit'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Eliminar`} ></SalmonButton>
                        </form>
                    }
                    <a className={`text-decoration-none`} href={loggedUser.rol == "Admin" ? `/admin/${loggedUser.nombre}-${loggedUser.apellidos}/usuarios` : `/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/usuarios`}>
                        <SalmonButton tipo={'div'} classNames={`text-big justify-content-center lim-boton adjust-orden-actions`} texto={`Regresar`} ></SalmonButton>
                    </a>
                </div>
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