// React
import React, {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Imágenes


//Componente de rutas
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Home from './pages/Home/index'
import Membresia from './pages/Membresia/index'
import Ajustes from './pages/Ajustes/index'
import Nosotros from './pages/Nosotros/index'
import Movie from './pages/Movie/index'


//Estilo en scss
import "./App.scss"


function App() {
  {/* Se configura un componente Router para recibir las rutas mediante un
      switch y realizar las visitas acorde a la llamada */}
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem('loggedUser') || false)
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}></Route>
          <Route exact path='/login' element={<Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}></Route>
          <Route exact path='/sign-up' element={<Register/>}></Route>
          <Route exact path='/:userName/home' element={<Home loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
          <Route exact path='/:userName/membresia' element={<Membresia loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
          <Route exact path='/:userName/ajustes' element={<Ajustes loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
          <Route exact path='/:userName/nosotros' element={<Nosotros loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
          <Route exact path='/:userName/movieTrailer/:id' element={<Movie loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
