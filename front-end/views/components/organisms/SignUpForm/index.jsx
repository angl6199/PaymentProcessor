//React
import React, { useState } from "react"

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'

export default function SignUpForm({ errorInformation }) {
    const [nombre, setNombre] = useState()
    const [apellidos, setApellidos] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm_password, setConfirm_password] = useState()
    const [error, setError] = useState(errorInformation)

    return (
        <>
            <div className={`position-absolute positionform`}>
                <div className={`d-flex flex-column formcontainer box-shadow-gr-nm br-10 align-items-center`}>
                    <form className={`mb-5`} action={'/signup'} method={'POST'}>
                        <p className={`a-medium-black text-big mt-12 mb-8`}>Registrar Usuario</p>
                        <label className={`a-regular-gray text-small d-flex flex-column`}>Nombre
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Apellidos
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>E-mail
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Contraseña
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Confirmar contraseña
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='confirm_password' value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)}></input>
                        </label>
                        {error != null &&
                            <div id={`error-container`} className={`error-effect`}>
                                <div className={`error-container`}>
                                    <p className={`a-regular-red`}>{error}</p>
                                </div>
                            </div>
                        }
                        <OrangeButton text={'Registrarse'} variant={1}></OrangeButton>
                    </form>
                    <hr className={`hr-gray m-0`}></hr>
                    <a className={`text-decoration-none needhelp w-100`} href={'/'}>
                        <div className={'cursor-pointer'}>
                            <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Regresar</p>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}