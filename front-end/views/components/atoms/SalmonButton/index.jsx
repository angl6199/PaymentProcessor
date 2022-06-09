//React
import React from "react"

export default function SalmonButton({ classNames, texto, funcion, tipo }) {

    return (
        <>
            {tipo === 'div' ?
                <div className={`salmon-button d-flex align-items-center a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>
                    <p className={`mt-0 mb-0`}>{texto}</p>
                </div>
                : tipo === "submit" ?
                    <button type="submit" onClick={(e) => funcion(e)} className={`salmon-button d-flex align-items-center pt-2 pb-2 pl-3 pr-3 a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>{texto}</button>
                    :
                    <button onClick={(e) => funcion(e)} className={`salmon-button d-flex align-items-center pt-2 pb-2 pl-3 pr-3 a-light-white text-medium box-shadow-gr-bg cursor-pointer ${classNames}`}>{texto}</button>
            }
        </>
    )
}