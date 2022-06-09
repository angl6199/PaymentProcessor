//React
import React from "react"
import { useParams } from 'react-router-dom'

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import EditarUsuario from "../../components/organisms/EditarUsuario";
import HeaderBar from "../../components/organisms/HeaderBar";


export default function EditarUsuarioPage({ loggedUser, setLoggedUser }) {
    const { id } = useParams()

    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Edición de usuario'}></HeaderBar>
                    <EditarUsuario id_Editado={id} loggedUser={loggedUser}></EditarUsuario>
                </div>
            </div>
        </>
    )
}