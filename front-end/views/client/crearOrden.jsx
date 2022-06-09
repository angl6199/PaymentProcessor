//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import CrearOrden from "../components/organisms/CrearOrden";
import HeaderBar from "../components/organisms/HeaderBar";

export default function CrearOrdenPage({ loggedUser, errorInformation=null, final=false, divisas=null, precioPorDivisa=null, divisaApesos=null, lastform=null }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Crear Pago'}></HeaderBar>
                    <CrearOrden loggedUser={loggedUser} errorInformation={errorInformation} final={final} divisas={divisas} precioPorDivisa={precioPorDivisa} divisaApesos={divisaApesos} lastform={lastform}></CrearOrden>
                </div>
            </div>
        </>
    )
}