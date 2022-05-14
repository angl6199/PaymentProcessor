//React
import React from "react"

//Componentes
import LoginForm from "../../components/organisms/LoginForm";

export default function AboutUs({ loggedUser, setLoggedUser }) {
    return (
        <>
            <div className={`orange-layout`}></div>
            <div className={`gray-layout-login`}></div>
            <LoginForm loggedUser={loggedUser} setLoggedUser={setLoggedUser}></LoginForm>
        </>
    )
}
