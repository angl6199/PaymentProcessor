// React
import React from "react"
import Cookies from 'js-cookie'

//Componente de rutas
import Router from "./config/routes"

//Estilo en css
import "./App.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: undefined
    }
  }

  componentWillMount() {
    let temp = Cookies.get('loggedUser')
    if (temp !== undefined) {
      temp = temp.trim()
      temp = JSON.parse(temp)
      fetch(`http://localhost:8000/users/getOne/${temp.id}`)
        .then(response => response.json())
        .then((usuario) => {
          temp = usuario
          this.loggedUser = temp
          this.setState({
            ready: true
          })
        })
    } else {
      this.setState({
        ready: false
      })
    }
  }

  setLoggedUser(state) {
    this.loggedUser = state
  }

  render() {
    return (
      <>
        {this.state.ready !== undefined && Router(this.loggedUser, this.setLoggedUser)}
      </>
    );
  }
}