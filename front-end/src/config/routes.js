import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from './../pages/Login/index'
import SignUp from './../pages/SignUp/index'
import PagosRecibidos from "./../pages/PagosRecibidos";
import AbonosRecibidos from "../pages/AbonosRecibidos";
import CrearOrden from "./../pages/CrearOrden";
import AdministracionUsuario from "../pages/AdministracionUsuario";
import CrearUsuario from "../pages/CrearUsuario";
import EditarOrden from "../pages/EditarOrden";
import EditarUsuario from "../pages/EditarUsuario";

function defineRoutes(loggedUser, setLoggedUser) {
    const routes = [
        {
            path: "/:userName/pagos-recibidos",
            element: <PagosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId1"
        },
        {
            path: "/:userName/abonos-recibidos",
            element: <AbonosRecibidos loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId2"
        },
        {
            path: "/:userName/crear-orden",
            element: <CrearOrden loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId3"
        },
        {
            path: "/:userName/administracion-usuarios",
            element: <AdministracionUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId4"
        },
        {
            path: "/:userName/crear-usuario",
            element: <CrearUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId5"
        },
        {
            path: "/:userName/editar-orden/:id",
            element: <EditarOrden loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId6"
        },
        {
            path: "/:userName/editar-usuario/:id",
            element: <EditarUsuario loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId7"
        },
    ]

    const routes2 = [
        {
            path: '/',
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId8"
        },
        {
            path: "/login",
            element: <Login loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId9"
        },
        {
            path: "/signup",
            element: <SignUp loggedUser={loggedUser} setLoggedUser={setLoggedUser} />,
            key: "uniqueId10"
        },
    ]

    let views = routes.map((i) =>
        <Route key={i.key} exact path={i.path} element={loggedUser === false || loggedUser === undefined ? <Navigate to="/" /> : i.element}></Route>
    );

    let views2 = routes2.map((i) =>
        <Route key={i.key} exact path={i.path} element={loggedUser !== false && loggedUser !== undefined ? <Navigate to={`/${loggedUser.nombre}/pagos-recibidos`} /> : i.element}></Route>
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