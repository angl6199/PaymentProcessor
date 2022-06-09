//React
import React from "react"
import { useParams } from 'react-router-dom'


//Componentes
import LeftMenu from "../../components/molecules/LeftMenu";
import PagosRecibidos from "../../components/organisms/PagosRecibidos";
import HeaderBar from "../../components/organisms/HeaderBar";


export default function PagosRecibidosPage({ loggedUser, setLoggedUser }) {
    const { refresh } = useParams()
    if (refresh === true) {
        window.location.reload(false);
    }

    return (
        <>
            <div className={`d-flex`}>
                <LeftMenu loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LeftMenu>
                <div className={`d-flex flex-column right-screen`}>
                    <HeaderBar loggedUser={loggedUser} titulo={'Pagos realizados'}></HeaderBar>
                    <PagosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser}></PagosRecibidos>
                </div>
            </div>
        </>
    )
}