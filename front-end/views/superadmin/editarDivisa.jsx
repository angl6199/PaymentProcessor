//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import EditarDivisa from "../components/organisms/EditarDivisa";
import HeaderBar from "../components/organisms/HeaderBar";

export default function EditarDivisaPage({ loggedUser, environment, divisa, errorInformation=null }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Editar divisa'}></HeaderBar>
                    <EditarDivisa loggedUser={loggedUser} divisa={divisa} errorInformation={errorInformation}></EditarDivisa>
                </div>
            </div>
        </>
    )
}