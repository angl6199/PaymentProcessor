//React
import React from "react"

//Componentes
import EditarOrdenForm from "../../molecules/EditarOrdenForm";

export default class EditarOrdenPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pago: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8000/pagos/getOne/${this.props.id}`)
            .then(response => response.json())
            .then((pago) => {
                this.setState({ pago: pago })
            })
    }
    render() {
        return (
            <>
                <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                    <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                        <EditarOrdenForm pago={this.state.pago} loggedUser={this.props.loggedUser}></EditarOrdenForm>
                    </div>
                </div>
            </>
        )
    }
}