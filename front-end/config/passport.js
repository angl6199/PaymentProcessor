const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oidc')
const Usuario = require('../models/usuario')
const axios = require('axios');

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

passport.use(new GoogleStrategy({
    clientID: '384710369551-b11fqidqct7l6k9mo9dbpe5tf4i8slt9.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/login/google/redirect',
}, function (issuer, profile, cb) {
    Usuario.create({ nombre: profile.name.givenName, apellidos: profile.name.familyName, email: profile.emails[0].value, password: profile.id, verificado:true }, function (err, nuevoUsuario) {
        let credentials = {
            username: profile.emails[0].value,
            password: profile.id
        }
        if (err) {
            Usuario.findOne({ email: profile.emails[0].value }, function (err, usuario) {
                axios.post(`http://localhost:8000/users/login`, credentials)
                    .then((response) => {
                        Usuario.findOneAndUpdate({ email: profile.emails[0].value }, { jsonToken: response.data }, function (err, usuario) {
                            return cb(null, usuario)
                        })
                    })
            })
        }
        else {
            axios.post(`http://localhost:8000/users/login`, credentials)
                .then((response) => {
                    Usuario.findOneAndUpdate({ email: profile.emails[0].value }, { jsonToken: response.data }, function (err, usuario) {
                        return cb(null, usuario)
                    })
                })
        }
    })
})
);

passport.serializeUser(function (usuario, cb) {
    cb(null, usuario.id)
})

passport.deserializeUser(function (id, cb) {
    Usuario.findById(id, function (err, usuario) {
        cb(err, usuario);
    })
})

module.exports = passport