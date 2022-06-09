//React
import React, {useState} from "react"

//Componentes
import PaymentCard from '../../molecules/ObjectCard/index'

export default function AbonosRecibidos({loggedUser, objetos}){
    const [abonos, setAbonos] = useState(objetos)

    return (
        <>

            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    {abonos.length !== 0 ?
                        <>
                            <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                                <p className={`a-light-dark l mt-0 mb-0`}>Mostrando abonos</p>
                            </div>
                            <div className={`d-flex flex-column align-items-center`}>
                                <PaymentCard type={`abonos`} payments={abonos} loggedUser={loggedUser}></PaymentCard>
                            </div>
                        </>
                        :
                        <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                            <p className={`a-light-dark l mt-0 mb-0`}>Aún no cuentas con abonos</p>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}
