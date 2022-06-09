//React
import React, { useState } from "react"

//Componentes
import OrangeButton from '../../atoms/OrangeButton/index'

export default function LoginForm({ errorInformation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(errorInformation)

    return (
        <>

            <div className={`position-absolute positionform`}>
                <div className={`d-flex flex-column formcontainer box-shadow-gr-nm br-10 align-items-center`}>
                    <form className={`mb-5`} action={'/login'} method={'POST'}>
                        <p className={`a-medium-black text-big mt-12 mb-8`}>Inicio de sesión</p>
                        <label className={`a-regular-gray text-small d-flex flex-column`}>E-mail
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'text'} name='username' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        <label className={`a-regular-gray text-small d-flex flex-column mt-4`}>Contraseña
                            <input autoComplete={'off'} className={`text-normal a-medium-black forminput`} type={'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        {error != null &&
                            <div id={`error-container`} className={`error-effect`}>
                                <div className={`error-container`}>
                                    <p className={`a-regular-red`}>{error}</p>
                                </div>
                            </div>
                        }

                        <OrangeButton variant={1}></OrangeButton>
                    </form>
                    <a className={`text-decoration-none`} href={'/login/google'}>
                        <OrangeButton text={`Ingresar con Google`} classNames={'mt-0 mb-4'} variant={1}></OrangeButton>
                    </a>
                    <hr className={`hr-gray m-0`}></hr>
                    <a className={`text-decoration-none needhelp w-100`} href={'/signup'}>
                        <div className={'cursor-pointer'}>
                            <p className={'text-small a-regular-gray text-align-center mt-4 mb-4'}>Registrar nuevo usuario</p>
                        </div>
                    </a>
                </div>
            </div>

        </>
    )
}