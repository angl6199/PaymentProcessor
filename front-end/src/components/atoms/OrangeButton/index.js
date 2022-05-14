//React
import React from "react"

export default function OrangeButton({ variant, disable = false, text = false, todo = false }) {

    return (
        <>
            <button type='submit' onClick={todo ? todo : ''} disabled={disable} className={`${disable ? 'disable' : 'darkbutton'} a-regular-white text-normal b-none ${variant === 1 ? 'bb-w1' : variant === 2 ? 'bb-w2' : 'bb-w3'}`}> {text !== false ? text : 'Ingresar'} </button>
        </>
    )
}