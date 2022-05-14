//React
import React from "react"

//Componentes
import CrearOrdenForm from "../../molecules/CrearOrdenForm";

export default function CrearOrden({ loggedUser }) {
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <CrearOrdenForm loggedUser={loggedUser}></CrearOrdenForm>
                </div>
            </div>
        </>
    )
}