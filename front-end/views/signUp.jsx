//React
import React from "react"

//Componentes
import SignUpForm from "./components/organisms/SignUpForm";

export default function SignUpPage({ errorInformation=null }) {

    return (
        <>
            <link rel="stylesheet" href="/public/css/App.css" />
            <div className={`orange-layout`}></div>
            <div className={`gray-layout-login-2`}></div>
            <SignUpForm errorInformation={errorInformation}></SignUpForm>
        </>
    )
}
