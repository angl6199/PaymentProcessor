const Usuario = require('../models/usuario')
const passport = require('../config/passport')

exports.user_register = (req, res)=>{
    if(req.body.password != req.body.confirm_password){
        res.status(500).json('Contrasenas no coinciden')
    }
    Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password }, function(err, nuevoUsuario) {
        if(err){
            res.status(500).json('Este email ya está en uso con otro usuario')
            console.log('Este email ya está en uso con otro usuario')
        }
        else{
            res.status(200).json()
            nuevoUsuario.enviar_mail_bienvenida()
        }
    })
}

exports.get_user_by_id = (req, res)=>{
    Usuario.findById(req.params.id, function(err, usuario){
        res.json(usuario)
    })
}

exports.user_login = (req, res, next)=>{
    passport.authenticate('local', function(err, usuario, info){
    if(err) res.status(500).json()
    if(!usuario) res.status(201).json()
    if(usuario.verificado == false) res.status(202).json()
    req.logIn(usuario, function(err){
        if(err) res.status(500).json()
        res.status(200).json(usuario)
    })
  })(req, res, next)
}

exports.user_session = (req, res, next) =>{
    if (req.isAuthenticated()) {
        res.status(200).json(req.user)
    } else{
        res.status(200).json(req.isAuthenticated())
    }
}