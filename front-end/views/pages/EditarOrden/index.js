//React
import React from "react"
import { useParams } from 'react-router-dom'

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import EditarOrden from "../../components/organisms/EditarOrden";
import HeaderBar from "../../components/organisms/HeaderBar";

export default function EditarOrdenPage({ loggedUser, setLoggedUser }) {
    const { id } = useParams()

    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={"Detalles de operación"}></HeaderBar>
                    <EditarOrden id={id} loggedUser={loggedUser}></EditarOrden>
                </div>
            </div>
        </>
    )
}