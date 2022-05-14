const Usuario = require('../models/usuario')
const passport = require('../config/passport')

exports.user_register = (req, res)=>{
    if(req.body.password != req.body.confirm_password){
        res.json('Contrasenas no coinciden')
    }
    else{
        if(validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos)){
            Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password }, function(err, nuevoUsuario) {
                if(err){
                    res.json('Email ocupado')
                    console.log('Este email ya está en uso con otro usuario')
                }
                else{
                    res.status(200).json(nuevoUsuario)
                    nuevoUsuario.enviar_mail_bienvenida()
                }
            })
        }
        else{
            res.json("Campos no validos")
        }
    } 
}

exports.get_user_by_id = (req, res)=>{
    Usuario.findById(req.params.id, function(err, usuario){
        res.json(usuario)
    })
}

exports.get_all_users = (req, res)=>{
    Usuario.find({}, function(err, usuarios){
        res.json(usuarios)
    })
}

exports.update_User = (req, res)=>{
    let data = {nombre: req.body.nombre, apellidos: req.body.apellidos, rol: req.body.rol, email:req.body.email}
    console.log(validarEmail(req.body.email), "data")
    if(validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos) && validateField(req.body.rol)){
        Usuario.findByIdAndUpdate(req.params.id, data, function(err, usuario){
            if (err) res.json(err)
            res.json(usuario)
        })
    } else{
        res.json("Campos mal")
    }
    
}

function validateField(valor){
    if (valor=='' || valor==undefined || valor==null) {
        return false
    } else{
        return true
    }
}

function validarEmail(valor) {
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		return false
	}
        return true
}

exports.user_login = (req, res, next)=>{
    passport.authenticate('local', function(err, usuario, info){
    if(err) console.log("Error en passport")
    if(!usuario) res.json('Usuario no existe')
    if(usuario.verificado == false) res.json('Usuario no verificado')
    req.logIn(usuario, function(err){
        if(err) console.log("Hubo un error en el inicio de sesion")
        else res.json(usuario)
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