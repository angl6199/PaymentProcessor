const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuario')

passport.use(new LocalStrategy(
    function (username, password, done) {
        Usuario.findOne({ email: username }, function (err, usuario) {
            if (err) return done(err)
            if (!usuario) return done(null, false)
            usuario.validPassword(password).then((result) => {
                if (result == true) {
                    return done(null, usuario)
                } else {
                    return done(null, null, { message: 'Password incorrecto' })
                }
            })
        })
    }
))

passport.serializeUser(function (usuario, cb) {
    cb(null, usuario.id)
})

passport.deserializeUser(function (id, cb) {
    Usuario.findById(id, function (err, usuario) {
        cb(err, usuario);
    })
})

module.exports = passport