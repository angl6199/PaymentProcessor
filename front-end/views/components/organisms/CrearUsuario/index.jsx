//React
import React from "react"

//Componentes
import CrearUsuarioForm from "../../molecules/CrearUsuarioForm";

export default function CrearUsuario({ loggedUser, errorInformation }) {
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <CrearUsuarioForm loggedUser={loggedUser} errorInformation={errorInformation}></CrearUsuarioForm>
                </div>
            </div>
        </>
    )
}