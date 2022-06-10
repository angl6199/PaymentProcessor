//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import EditarUsuario from "../components/organisms/EditarUsuario";
import HeaderBar from "../components/organisms/HeaderBar";


export default function EditarUsuarioPage({ loggedUser, usuario, environment, errorInformation=null }) {

    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Edición de usuario'}></HeaderBar>
                    <EditarUsuario usuario={usuario} loggedUser={loggedUser} errorInformation={errorInformation}></EditarUsuario>
                </div>
            </div>
        </>
    )
}