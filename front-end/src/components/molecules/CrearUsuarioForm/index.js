//React
import React, {useState} from "react"

//Componentes
import SalmonButton from './../../atoms/SalmonButton/index'
import { registerRequest } from "../../../services";

//Imágenes
import usersIcon from './../../../assets/img/users-icon.png'

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';


export default function CrearUsuarioForm({type, status, loggedUser}){
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [rol, setRol] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    const [error, setError] = useState()

    function crearUsuario(e) {
        e.preventDefault();
        let credentials = {
            nombre: nombres,
            apellidos: apellidos,
            rol: rol,
            email: email,
            password: password,
            confirm_password: password2
        }
        registerRequest(credentials).then((response)=>{
            let flag = false
            console.log(response, "Atencion")
            if (response.data == 'Email ocupado'){
                flag = true
                setError("Email ya ocupado")
                displayError()
            }
            if (response.data == 'Contrasenas no coinciden') {
                flag = true
                setError("Contraseñas no coinciden")
                displayError()
            }
            if(response.data == "Campos no validos"){
                flag = true
                setError("Campos no válidos")
                displayError()
            }
            else if(response.status == 200 && response.data != 'Email ocupado' && response.data != 'Contraseñas no coinciden' && response.data != 'Campos no validos' && flag==false){
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

    {/* Componente que retorna página de Graduación con temporizador configurado con librería Countdown
        importada de React */}
    return (
        <>
        <div className={`d-flex flex-column mb-5 pl-6 pr-6 pt-4 pb-5 box-shadow-gr-bg crear-orden-form-card`}>
            <div className={`d-flex align-items-center`}>
                <img width={50} height={50} src={usersIcon}></img>
                <p className={`a-light-dark l mt-0 mb-0 ml-5`}>Formato creación usuario</p>
            </div>
            <hr className={`hr-gray mt-4 mb-0`}></hr>
            <form className={`d-flex justify-content-center flex-column mt-8 crear-orden-form`}>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Nombre(s): 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='nombres' value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Apellido(s): 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'text'} name='apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex mb-6 justify-content-space-between`}>Rol: 
                        <select className={`text-normal a-light-dark crear-orden-input ml-3 rol`} type={'text'} name='rol' value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option value={`Trabajador`}>Trabajador</option>
                            <option value={`Admin`}>Admin</option>
                            <option value={`Superadmin`}>Superadmin</option>
                        </select>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Email: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'email'} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-6`}>Contraseña: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'password'} name='montoPesos' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <label className={`a-light-dark text-big d-flex justify-content-space-between mb-10`}>Confirmar contraseña: 
                        <input autoComplete={'off'} className={`text-normal a-light-dark crear-orden-input ml-3`} type={'password'} name='montoPesos' value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
                </label>
                <SalmonButton tipo={'submit'} funcion={crearUsuario} classNames={`text-big justify-content-center lim-boton`} texto={`Crear`} ></SalmonButton>
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