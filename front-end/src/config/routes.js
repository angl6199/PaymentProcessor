import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from './../pages/Login/index'
import SignUp from './../pages/SignUp/index'
import PagosRecibidos from "./../pages/PagosRecibidos";
import CrearOrden from "./../pages/CrearOrden";
import AdministracionUsuario from "../pages/AdministracionUsuario";
import CrearUsuario from "../pages/CrearUsuario";
import AdministracionCuenta from "../pages/AdministracionCuenta";
import CrearCuenta from "../pages/CrearCuenta";
import EditarOrden from "../pages/EditarOrden";
import EditarUsuario from "../pages/EditarUsuario";
import EditarCuenta from "../pages/EditarCuenta";

//Definición de rutas con definición de URL, componente renderizado y definición de exactitud para
//transformarlas en componente Route, filtrarlas por Switch y visitarlas con Router

function defineRoutes(loggedUser, setLoggedUser) {
    const routes = [
        {
            path: "/:userName/pagos-recibidos",
            element: <PagosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/crear-orden",
            element: <CrearOrden loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/administracion-usuarios",
            element: <AdministracionUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/crear-usuario",
            element: <CrearUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/administracion-cuentas",
            element: <AdministracionCuenta loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/crear-cuenta",
            element: <CrearCuenta loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/editar-orden/:id",
            element: <EditarOrden loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/editar-usuario/:id",
            element: <EditarUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/:userName/editar-cuenta/:id",
            element: <EditarCuenta loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
    ]

    const routes2 = [
        {
            path: '/',
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/login",
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
        {
            path: "/signup",
            element: <SignUp loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
        },
    ]
    
    let views = routes.map((i) => 
        <Route exact path={i.path} element={loggedUser == false || loggedUser == undefined ? <Navigate to="/" /> : i.element}></Route>
    );

    let views2 = routes2.map((i) => 
        <Route exact path={i.path} element={loggedUser != false && loggedUser != undefined ? <Navigate to={`/${loggedUser.nombre}/pagos-recibidos`} /> : i.element}></Route>
    );
    
    return (
            <Router>
                <Routes>
                    {views}
                    {views2}
                </Routes>
            </Router>
    );
}



export default defineRoutes;