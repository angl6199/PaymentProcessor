//React
import React from "react"

//Componentes
import EditarUsuarioForm from "../../molecules/EditarUsuarioForm";

export default class EditarUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8000/users/getOne/${this.props.id_Editado}`)
            .then(response => response.json())
            .then((usuario) => {
                this.setState({ usuario: usuario })
            })
    }

    render() {
        return (
            <div className={`d-flex flex-column gray-layout scroll-overflow`}>
                <div className={`d-flex flex-column ml-12 mr-12 mt-8`}>
                    <EditarUsuarioForm targetUser={this.props.id_Editado} loggedUser={this.state.usuario}></EditarUsuarioForm>
                </div>
            </div>
        )
    }
}