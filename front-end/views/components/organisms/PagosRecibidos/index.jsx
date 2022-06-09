//React
import React, { useState } from "react"

//Componentes
import PaymentCard from '../../molecules/ObjectCard/index'

export default function PagosRecibidos({ loggedUser, objetos }) {
    const [pagos, setPagos] = useState(objetos)

    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    {pagos.length !== 0 ?
                        <>
                            <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                                <p className={`a-light-dark l mt-0 mb-0`}>Mostrando pagos</p>
                            </div>
                            <div className={`d-flex flex-column align-items-center`}>
                                <PaymentCard type={`pagos`} payments={pagos} loggedUser={loggedUser}></PaymentCard>
                            </div>
                        </>
                        :
                        <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                            <p className={`a-light-dark l mt-0 mb-0`}>Aún no cuentas con pagos</p>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}