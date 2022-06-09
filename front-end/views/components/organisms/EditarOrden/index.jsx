//React
import React from "react"

//Componentes
import EditarOrdenForm from "../../molecules/EditarOrdenForm";

export default function EditarOrden({ pago, tipo, loggedUser}){
    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <EditarOrdenForm pago={pago} tipo={tipo} loggedUser={loggedUser}></EditarOrdenForm>
                </div>
            </div>
        </>
    )
}