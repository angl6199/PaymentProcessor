//React
import React from "react"

//Componentes
import LoginForm from "./components/organisms/LoginForm";

export default function Login({ errorInformation=null }) {
    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`orange-layout`}></div>
            <div className={`gray-layout-login`}></div>
            <LoginForm errorInformation={errorInformation}></LoginForm>
        </>
    )
}
