//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import CrearUsuario from "../components/organisms/CrearUsuario";
import HeaderBar from "../components/organisms/HeaderBar";

export default function CrearUsuarioPage({ loggedUser, environment, errorInformation=null }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Crear Usuario'}></HeaderBar>
                    <CrearUsuario loggedUser={loggedUser} errorInformation={errorInformation}></CrearUsuario>
                </div>
            </div>
        </>
    )
}