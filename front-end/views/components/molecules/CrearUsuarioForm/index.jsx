//React
import React, { useState } from "react"

//Componentes
import SalmonButton from '../../atoms/SalmonButton/index'

export default function CrearUsuarioForm({ loggedUser, errorInformation }) {
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [rol, setRol] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [error, setError] = useState(errorInformation)

    return (
        <>
            <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
                <div className={`d-flex align-items-center`}>
                    <img alt="" width={50} height={50} src={`/public/assets/img/users-icon.png`}></img>
                    <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato creación usuario</p>
                </div>
                <hr className={`hr-gray mt-4 mb-0`}></hr>
                <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`} action={`/${loggedUser.rol == "Admin" ? "admin" : "superadmin"}/${loggedUser.nombre}-${loggedUser.apellidos}/crear-usuario`} method="POST">
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Nombre(s):
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='nombre' value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Apellido(s):
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Rol:
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 rol`} type={'text'} name='rol' value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option value={`Cliente`}>Cliente</option>
                            <option value={`Admin`}>Admin</option>
                            {loggedUser.rol == "Superadmin" &&
                                <option value={`Superadmin`}>Superadmin</option>
                            }
                        </select>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Contraseña:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <label className={`a-light-dark text-big d-flex justify-content-space-between mb-10`}>Confirmar contraseña:
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'password'} name='confirm_password' value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
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