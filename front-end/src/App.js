// React
import React, {useState} from "react"


//Componente de rutas
import Router from "./config/routes"

//Estilo en scss
import "./App.scss"


function App() {
  {/* Se configura un componente Router para recibir las rutas mediante un
      switch y realizar las visitas acorde a la llamada */}
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem('loggedUser') || false)
  return (
    <>
      {Router(loggedUser, setLoggedUser)}
    </>

  );
}

export default App;
