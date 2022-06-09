//React
import React from "react"

//Componentes
import LeftMenu from "../components/molecules/LeftMenu";
import DivisasCreadas from "../components/organisms/AdministracionDivisas";
import HeaderBar from "../components/organisms/HeaderBar";

export default function DivisasPage({ loggedUser, divisas }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Divisas extranjeras'}></HeaderBar>
                    <DivisasCreadas loggedUser={loggedUser} divisas={divisas}></DivisasCreadas>
                </div>
            </div>
        </>
    )
}