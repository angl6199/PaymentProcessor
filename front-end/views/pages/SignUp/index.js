//React
import React from "react"

//Componentes
import SignUpForm from "../../components/organisms/SignUpForm";

export default function SignUpPage({ loggedUser, setLoggedUser }) {

    return (
        <>
            <div className={`orange-layout`}></div>
            <div className={`gray-layout-login`}></div>
            <SignUpForm loggedUser={loggedUser} setLoggedUser={setLoggedUser}></SignUpForm>
        </>
    )
}
