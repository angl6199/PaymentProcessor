//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import CrearDivisa from "../components/organisms/CrearDivisa";
import HeaderBar from "../components/organisms/HeaderBar";

export default function CrearDivisaPage({ loggedUser, environment, errorInformation=null }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Registrar Divisa'}></HeaderBar>
                    <CrearDivisa loggedUser={loggedUser} errorInformation={errorInformation}></CrearDivisa>
                </div>
            </div>
        </>
    )
}