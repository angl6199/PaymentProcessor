//React
import React from "react"

//Componentes
import CrearOrdenForm from "../../molecules/CrearOrdenForm";

export default function CrearOrden({ loggedUser, errorInformation, final, divisas, precioPorDivisa, divisaApesos, lastform }) {
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <CrearOrdenForm loggedUser={loggedUser} errorInformation={errorInformation} final={final} divisas={divisas} precioPorDivisa={precioPorDivisa} divisaApesos={divisaApesos} lastform={lastform}></CrearOrdenForm>
                </div>
            </div>
        </>
    )
}