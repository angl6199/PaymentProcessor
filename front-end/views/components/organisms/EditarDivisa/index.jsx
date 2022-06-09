//React
import React from "react"

//Componentes
import EditarDivisaForm from "../../molecules/EditarDivisaForm";

export default function EditarDivisa({ loggedUser, errorInformation, divisa }) {
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <EditarDivisaForm loggedUser={loggedUser} divisa={divisa} errorInformation={errorInformation}></EditarDivisaForm>
                </div>
            </div>
        </>
    )
}