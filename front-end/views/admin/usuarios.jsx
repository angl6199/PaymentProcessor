//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import AdministracionUsuario from "../components/organisms/AdministracionUsuario";
import HeaderBar from "../components/organisms/HeaderBar";

export default function AdministracionUsuarioPage({ loggedUser, environment, usuarios }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Administración de usuarios'} ></HeaderBar>
                    <AdministracionUsuario loggedUser={loggedUser} usuarios={usuarios}></AdministracionUsuario>
                </div>
            </div>
        </>
    )
}