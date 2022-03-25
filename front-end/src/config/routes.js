//Componentes
import Login from './../pages/Login/index'

//Definición de rutas con definición de URL, componente renderizado y definición de exactitud para
//transformarlas en componente Route, filtrarlas por Switch y visitarlas con Router
const routes = [
    {
        path: '/',
        component: Login,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    }
]

export default routes;