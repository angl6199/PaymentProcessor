//React
import React from "react"

export default function HeaderBar({ titulo, loggedUser }) {

    function formatoNumero() {
        var num = parseFloat(loggedUser.fondos)
        return num.toLocaleString('en')
    }

    return (
        <>
            <div className={`d-flex align-items-center justify-content-space-between right-header`}>
                <p className="mt-0 mb-0 ml-12 a-light-white text-big">{titulo}</p>
                <div className={`d-flex`}>
                    <p className="mt-0 mb-0 mr-12 a-light-white text-big">Fondos: &nbsp;  {formatoNumero()}</p>
                    <p className="mt-0 mb-0 mr-12 a-light-white text-big">{`${loggedUser.nombre} ${loggedUser.apellidos}`}</p>
                </div>
            </div>
        </>
    )
}