//React
import React from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import CrearUsuario from "../../components/organisms/CrearUsuario";
import HeaderBar from "../../components/organisms/HeaderBar";

export default function CrearUsuarioPage({ loggedUser, setLoggedUser }) {
    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Crear Usuario'}></HeaderBar>
                    <CrearUsuario loggedUser={loggedUser}></CrearUsuario>
                </div>
            </div>
        </>
    )
}