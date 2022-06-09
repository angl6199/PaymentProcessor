//React
import React from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import CrearOrden from "../../components/organisms/CrearOrden";
import HeaderBar from "../../components/organisms/HeaderBar";

export default function CrearOrdenPage({ loggedUser, setLoggedUser }) {
    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Crear Pago'}></HeaderBar>
                    <CrearOrden loggedUser={loggedUser}></CrearOrden>
                </div>
            </div>
        </>
    )
}