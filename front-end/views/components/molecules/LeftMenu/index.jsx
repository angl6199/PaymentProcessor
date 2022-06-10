//React
import React from "react"

export default function LeftMenu({ loggedUser, environment }) {
    return (
        <>
            {loggedUser.rol == "Cliente" ?
                <div className={'left-menu d-flex flex-column box-shadow-gr-xl'}>
                    <div className={`d-flex menu-header justify-content-center`}>
                        <p className={`a-light-white l mt-4 mb-4`}>Gestor de Pagos</p>
                    </div>
                    <div className="scroll-overflow">
                        <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Transacciones</p>
                        <a className={`text-decoration-none`} href={`/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/pagos-realizados`}>
                            <div className={'d-flex align-items-center option mt-5'}>
                                <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Pagos realizados</p>
                            </div>
                        </a>
                        <a className={`text-decoration-none`} href={`/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden`}>
                            <div className={'d-flex align-items-center option mt-4'}>
                                <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-payment-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear pago</p>
                            </div>
                        </a>
                        <a className={`text-decoration-none`} href={`/cliente/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos`}>
                            <div className={'d-flex align-items-center option mt-5'}>
                                <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Abonos recibidos</p>
                            </div>
                        </a>
                        <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Sistema</p>
                        <a className={`text-decoration-none`} href={`/logout`}>
                            <div className={'d-flex align-items-center option mt-4'}>
                                <img alt="" className={'ml-14 mt-0'} width={20} height={20} src={environment + '/public/assets/img/logout.png'}></img><p className={`ml-3 a-light-dark text-medium mt-0 mb-0`}>Salir</p>
                            </div>
                        </a>
                    </div>
                </div>
                : loggedUser.rol == "Admin" ?
                    < div className={'left-menu d-flex flex-column box-shadow-gr-xl'}>
                        <div className={`d-flex menu-header justify-content-center`}>
                            <p className={`a-light-white l mt-4 mb-4`}>Gestor de Pagos</p>
                        </div>
                        <div className="scroll-overflow">
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Transacciones</p>
                            <a className={`text-decoration-none`} href={`/admin/${loggedUser.nombre}-${loggedUser.apellidos}/pagos-realizados`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Pagos realizados</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/admin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-payment-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear pago</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/admin/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Abonos recibidos</p>
                                </div>
                            </a>
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Usuarios</p>
                            <a className={`text-decoration-none`} href={`/admin/${loggedUser.nombre}-${loggedUser.apellidos}/usuarios`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/administracion-users-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Administración</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/admin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-usuario`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-user-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear usuario</p>
                                </div>
                            </a>
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Sistema</p>
                            <a className={`text-decoration-none`} href={`/logout`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14 mt-0'} width={20} height={20} src={environment + '/public/assets/img/logout.png'}></img><p className={`ml-3 a-light-dark text-medium mt-0 mb-0`}>Salir</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    :
                    <div className={'left-menu d-flex flex-column box-shadow-gr-xl'}>
                        <div className={`d-flex menu-header justify-content-center`}>
                            <p className={`a-light-white l mt-4 mb-4`}>Gestor de Pagos</p>
                        </div>
                        <div className="scroll-overflow">
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Transacciones</p>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/pagos-realizados`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Pagos realizados</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-orden`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-payment-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear pago</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/abonos-recibidos`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/money.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Abonos recibidos</p>
                                </div>
                            </a>
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Usuarios</p>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/usuarios`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/administracion-users-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Administración</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-usuario`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-user-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Crear usuario</p>
                                </div>
                            </a>
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Divisas</p>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/divisas`}>
                                <div className={'d-flex align-items-center option mt-5'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/administracion-cuentas-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Administración</p>
                                </div>
                            </a>
                            <a className={`text-decoration-none`} href={`/superadmin/${loggedUser.nombre}-${loggedUser.apellidos}/crear-divisa`}>
                                <div className={'d-flex align-items-center option mt-4'}>
                                    <img alt="" className={'ml-14'} width={20} height={20} src={environment + '/public/assets/img/add-payment-icon.png'}></img><p className={`ml-3 mt-0 mb-0 a-light-dark text-medium`}>Registrar divisa</p>
                                </div>
                            </a>
                            <p className={`ml-11 mt-10 mb-1 a-light-gray h3`}>Sistema</p>
                            <a className={`text-decoration-none`} href={`/logout`}>
                                <div className={'d-flex align-items-center option mt-4 mb-5'}>
                                    <img alt="" className={'ml-14 mt-0'} width={20} height={20} src={environment + '/public/assets/img/logout.png'}></img><p className={`ml-3 a-light-dark text-medium mt-0 mb-0`}>Salir</p>
                                </div>
                            </a>
                        </div>
                    </div>
            }
        </>
    )
}
