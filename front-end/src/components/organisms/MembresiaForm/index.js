//React
import React, {useState, useEffect} from "react"
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'

//Componentes
import BlueButton from './../../atoms/BlueButton/index'
import Loading from './../../molecules/Loading/index'

//Imágenes
import Disney from './../../../assets/img/disney.png'
import Star from './../../../assets/img/star.png'
import Mercado from './../../../assets/img/mercado.png'
import Pago from './../../../assets/img/pago.png'


//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MembresiaForm({loggedUser, setLoggedUser}){

    const [suscrito1, setsuscrito1] = useState(loggedUser.suscripcion1);
    const [suscrito2, setsuscrito2] = useState(loggedUser.suscripcion2);
    const [ready, setReady] = useState(false)
    const [ready2, setReady2] = useState(false)

    const phone = useMediaQuery('(max-width:767px)');
    const tablet = useMediaQuery('(min-width:768px)');
    const desktop = useMediaQuery('(min-width:1000px)');

    useEffect(() => {
        const key = localStorage.getItem('key')
        // GET request using axios inside useEffect React hook
        axios.get(`https://mlwebapi.herokuapp.com/users/search/${key}`)
            .then(response => handleLoad(response.data))
            .catch((error) => console.log(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function handleLoad(objeto){
        localStorage.setItem('loggedUser', objeto)
        setLoggedUser(objeto)
        setsuscrito1(objeto.suscripcion1)
        setsuscrito2(objeto.suscripcion2)
        setReady(true)
        setTimeout(() => {
            setReady2(true)
        }, 1000);
    }

    function handleSuscription(e) {
        e.preventDefault();
        if (suscrito1 == 'true') {
            setsuscrito1('false');
            setsuscrito2('true');
            updateUser('false', 'true')
        }else{
            setsuscrito1('true')
            setsuscrito2('false')
            updateUser('true', 'false')
        }
    }

    function updateUser(v1, v2){
        const user = {
            nombre: loggedUser.nombre,
            apellido: loggedUser.apellido,
            email: loggedUser.email,
            contrasena: loggedUser.contrasena,
            suscripcion1: v1,
            suscripcion2: v2}
            axios.put(`https://mlwebapi.herokuapp.com/users/update/${loggedUser._id}`, user)
                .then(response => console.log(response.data))
                .catch((error) => console.log(error));
    }


    {/* Componente que retorna la sección izquierda de la página con posibilidad de ocultarse en 
        diseño responsivo mediante hooks */}
    return (
        <>
        { ready &&
        <>
            <div className={`membresiaform`}>
                <div className={`card1 d-flex box-shadow-gr-nm`}>
                    <div className={`d-flex flex-column justify-content-center align-items-center ml-3`}><img width={80} height={80} src={Disney}></img><p className={`a-regular-black text-small mt-0`}>Disney+ Incluido</p></div>
                    <div className={`d-flex flex-column justify-content-center align-items-center ml-3 mt-3`}><img width={110} height={60} src={Star}></img><p className={`a-regular-black text-small mt-2`}>Star+ Incluido</p></div>
                    <div className={`d-flex flex-column justify-content-center align-items-center ml-3 mt-3`}><img width={150} height={80} src={Mercado}></img><p className={`a-regular-black text-small mt-1 text-align-center`}>Beneficios en<br></br>Mercado Libre</p></div>
                    <div className={`d-flex flex-column justify-content-center align-items-center ml-3 mt-8`}><img width={120} height={40} src={Pago}></img><p className={`a-regular-black text-small mt-6 text-align-center`}>Descuentos con<br></br>Mercado Pago</p></div>
                </div>
                <div className={`card2 d-flex box-shadow-gr-nm mt-5 space-between`}>
                    <div className={`d-flex flex-column`}>
                        <p className={`a-medium-black text-medium mb-1 mt-3`}>Suscripción anual</p>
                        <div className={`d-flex align-items-center mt-1`}><p className={`a-bold-black h3 mr-2 mt-1 mb-1`}>$ 150</p><p className={`a-medium-black mt-0 mb-0`}>/mes</p></div>
                        <p className={`a-regular-black mt-2 text-small`}>Precio especial por nivel de lealtad 4.</p>
                    </div>
                    <div style={{'maxWidth':'190px'}} className={`d-flex flex-column`}>
                        <BlueButton todo={handleSuscription} text={` ${suscrito1 == 'true' ? 'Plan Seleccionado' : 'Suscribirse'} `} disable={suscrito1 == 'true' ? true : false} variant={3}></BlueButton>
                        <p className={`a-regular-black mt-5 text-xxs text-align-center`}>Al suscribirte, aceptas los Términos y Condiciones de Mercado Puntos.</p>
                    </div>
                </div>
                <div className={`card2 d-flex box-shadow-gr-nm mt-5 space-between`}>
                    <div className={`d-flex flex-column`}>
                        <p className={`a-medium-black text-medium mb-1 mt-3`}>Suscripción mensual</p>
                        <div className={`d-flex align-items-center mt-1`}><p className={`a-bold-black h3 mr-2 mt-1 mb-1`}>$ 200</p><p className={`a-medium-black mt-0 mb-0`}>/mes</p></div>
                        <p className={`a-regular-black mt-2 text-small`}>Precio especial por nivel de lealtad 4.</p>
                    </div>
                    <div style={{'maxWidth':'190px'}} className={`d-flex flex-column`}>
                        <BlueButton todo={handleSuscription} text={` ${suscrito2 == 'true' ? 'Plan Seleccionado' : 'Suscribirse'} `} disable={suscrito2 == 'true' ? true : false} variant={3}></BlueButton>
                        <p className={`a-regular-black mt-5 text-xxs text-align-center`}>Al suscribirte, aceptas los Términos y Condiciones de Mercado Puntos.</p>
                    </div>
                </div>
            </div>
            </>
        }
        <>
            <Loading hide={ready2} dark={true}></Loading>

        </>
        </>
    )
}