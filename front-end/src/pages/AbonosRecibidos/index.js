//React
import React from "react"

//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import AbonosRecibidos from "../../components/organisms/AbonosRecibidos";
import HeaderBar from "../../components/organisms/HeaderBar";

export default function AbonosRecibidosPage({ loggedUser, setLoggedUser }) {
    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Abonos recibidos'}></HeaderBar>
                    <AbonosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser}></AbonosRecibidos>
                </div>
            </div>
        </>
    )
}