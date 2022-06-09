//React
import React, { useState } from "react"

//Componentes
import EditarUsuarioForm from "../../molecules/EditarUsuarioForm";

export default function EditarUsuario({ loggedUser, usuario, errorInformation }) {
    const [user, setUser] = useState(usuario)

    return (
        <div className={`d-flex flex-column gray-layout scroll-overflow`}>
            <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                <EditarUsuarioForm targetUser={usuario} loggedUser={loggedUser} errorInformation={errorInformation}></EditarUsuarioForm>
            </div>
        </div>
    )
}