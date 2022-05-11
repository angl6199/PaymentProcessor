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
  }

  componentWillMount() {
    console.log(Cookies.get('loggedUser'))
    let temp = Cookies.get('loggedUser')
    if (temp) {
      temp = temp.trim()
      temp = JSON.parse(temp)
    }
    this.loggedUser = temp
    console.log(temp)
  }

  

  setLoggedUser(state) {
    this.loggedUser = state
  }

  render() {
    return (
      <>
        {Router(this.loggedUser, this.setLoggedUser)}
      </>
  
    );
  }
}