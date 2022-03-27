import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './../pages/Login/index'
import PagosRecibidos from "./../pages/PagosRecibidos";
import CrearOrden from "./../pages/CrearOrden";

//Definición de rutas con definición de URL, componente renderizado y definición de exactitud para
//transformarlas en componente Route, filtrarlas por Switch y visitarlas con Router

function defineRoutes(loggedUser, setLoggedUser) {
    const routes = [
        {
            path: '/',
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/login",
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/pagos-recibidos",
            element: <PagosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/crear-orden",
            element: <CrearOrden loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
    ]
    
    let views = routes.map((i) => 
        <Route exact path={i.path} element={i.element}></Route>
    );
    
    return (
            <Router>
                <Routes>
                    {views}
                </Routes>
            </Router>
    );
}



export default defineRoutes;