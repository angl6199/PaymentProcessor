//React
import React, {useState} from "react"

//Componentes
import DropMenuButton from '../../atoms/DropMenuButton/index'
import SalmonButton from '../../atoms/SalmonButton/index'
import PaymentCard from '../../molecules/ObjectCard/index'

export default function AdministracionUsuario ({loggedUser, usuarios}){
    const [perfiles, setPerfiles] = useState(usuarios)

    return (
        <>
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                        <p className={`a-light-dark l mt-0 mb-0`}>Mostrando usuarios</p>
                    </div>
                    <div className={`d-flex flex-column align-items-center`}>
                        <PaymentCard type={`usuarios`} users={perfiles} loggedUser={loggedUser}></PaymentCard>
                    </div>
                </div>
            </div>

        </>
    )
}