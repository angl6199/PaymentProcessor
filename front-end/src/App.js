// React
import React, {useEffect, useState} from "react"
import {validateUser} from "./services/index"
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'


//Componente de rutas
import Router from "./config/routes"

//Estilo en scss
import "./App.scss"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ready: undefined
  }
  }

  componentWillMount() {
    console.log(Cookies.get('loggedUser'))
    let temp = Cookies.get('loggedUser')
    if (temp!=undefined) {
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
    } else{
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
        {console.log(this.loggedUser, "Esto se va a pasar del usuario")}
        {this.state.ready != undefined && Router(this.loggedUser, this.setLoggedUser)}
      </>
  
    );
  }
}