//React
import React from "react"

//Componentes
import CrearDivisaForm from "../../molecules/CrearDivisaForm";

export default function CrearDivisa({ loggedUser, errorInformation }) {
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <CrearDivisaForm loggedUser={loggedUser} errorInformation={errorInformation}></CrearDivisaForm>
                </div>
            </div>
        </>
    )
}