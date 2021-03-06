//React
import React from "react"
import { useParams } from 'react-router-dom'

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import EditarOrden from "../components/organisms/EditarOrden";
import HeaderBar from "../components/organisms/HeaderBar";

export default function VerAbono({ loggedUser, pago, environment }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={"Detalles de operación"}></HeaderBar>
                    <EditarOrden pago={pago} tipo={2} loggedUser={loggedUser}></EditarOrden>
                </div>
            </div>
        </>
    )
}