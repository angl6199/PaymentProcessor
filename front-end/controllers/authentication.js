exports.validate_Client = function (req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.rol == 'Cliente') {
            return next()
        }
        if (req.user.rol == 'Admin') {
            res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Superadmin') {
            res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
    }
    res.redirect('/login')
}

exports.validate_Admin = function (req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.rol == 'Cliente') {
            res.redirect(`/cliente/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Admin') {
            return next()
        }
        if (req.user.rol == 'Superadmin') {
            res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
    }
    res.redirect('/login')
}

exports.validate_Superadmin = function (req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.rol == 'Cliente') {
            res.redirect(`/cliente/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Admin') {
            res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Superadmin') {
            return next()
        }
    }
    res.redirect('/login')
}

exports.validate_Logout = function (req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.rol == 'Cliente') {
            res.redirect(`/cliente/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Admin') {
            res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
        if (req.user.rol == 'Superadmin') {
            res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
        }
    }
    return next()
}