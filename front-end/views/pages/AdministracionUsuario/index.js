//React
import React from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import AdministracionUsuario from "../../components/organisms/AdministracionUsuario";
import HeaderBar from "../../components/organisms/HeaderBar";

export default function AdministracionUsuarioPage({ loggedUser, setLoggedUser }) {
    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Administración de usuarios'} ></HeaderBar>
                    <AdministracionUsuario loggedUser={loggedUser}></AdministracionUsuario>
                </div>
            </div>
        </>
    )
}