//React
import React from "react"

//Componentes
import DropMenuButton from '../../atoms/DropMenuButton/index'
import SalmonButton from '../../atoms/SalmonButton/index'
import PaymentCard from '../../molecules/ObjectCard/index'

export default class PagosRecibidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagos: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8000/pagos/${this.props.loggedUser._id}`)
            .then(response => response.json())
            .then((pagos) => {
                this.setState({ pagos: pagos })
            })
    }

    render() {
        return (
            <>

                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        {this.state.pagos.length !== 0 ?
                            <>
                                <div className={`d-flex justify-content-space-between align-items-center mb-10`}>
                                    <p className={`a-light-dark l mt-0 mb-0`}>Mostrando pagos</p>
                                    <div className={`d-flex`}>
                                        <DropMenuButton classNames={`mr-5`} opciones={['27/03/2022', '26/03/2022', '25/03/2022']}></DropMenuButton>
                                        <DropMenuButton classNames={`mr-5`} opciones={['Todos', 'Aprobados', 'Rechazados', 'Pendientes']}></DropMenuButton>
                                        <SalmonButton texto={`Aplicar filtros`}></SalmonButton>
                                    </div>
                                </div>
                                <div className={`d-flex flex-column align-items-center`}>
                                    <PaymentCard type={`pagos`} payments={this.state.pagos} loggedUser={this.props.loggedUser}></PaymentCard>
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
}