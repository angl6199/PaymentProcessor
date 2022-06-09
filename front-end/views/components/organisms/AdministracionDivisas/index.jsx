//React
import React, { useState } from "react"

//Componentes
import DivisasCard from '../../molecules/ObjectCard/index'

export default function AdministracionUsuario({ loggedUser, divisas }) {
    const [monedas, setMonedas] = useState(divisas)

    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                        <p className={`a-light-dark l mt-0 mb-0`}>{divisas.length != 0 ? "Divisas extranjeras" : "No hay divisas extranjeras registradas"}</p>
                    </div>
                    {divisas.length != 0 &&
                        <div className={`d-flex flex-column align-items-center`}>
                            <DivisasCard type={`divisas`} divisas={monedas} loggedUser={loggedUser}></DivisasCard>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}