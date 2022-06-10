//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import AbonosRecibidos from "../components/organisms/AbonosRecibidos";
import HeaderBar from "../components/organisms/HeaderBar";

export default function AbonosRecibidosPage({ loggedUser, objetos, environment }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} environment={environment}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Abonos recibidos'}></HeaderBar>
                    <AbonosRecibidos loggedUser={loggedUser} objetos={objetos}></AbonosRecibidos>
                </div>
            </div>
        </>
    )
}