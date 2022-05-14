const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const crypto = require('crypto')

const Token = require('../models/token')
const mailer = require('../mailer/mailer')

let Schema = mongoose.Schema

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio']
    },
    apellidos: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio']
    },
    rol: {
        type: String,
        trim: true,
        default: "Cliente"
    },
    fondos: {
        type: Number,
        trim: true,
        default: 10000.99
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'El email es obligatorio'],
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Por favor, ingrese un email válido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingrese un email válido']
    },
    activo: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
    verificado: {
        type: Boolean,
        default: false
    }
})

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} ya existe con otro usuario.' })

usuarioSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, saltRounds)
    }
    next()
})

usuarioSchema.methods.validPassword = function (password) {
    return bcrypt.compare(password, this.password)
}

usuarioSchema.methods.enviar_mail_bienvenida = function (cb) {
    const token = new Token({ _userId: this.id, token: crypto.randomBytes(16).toString('hex') })
    const email_destination = this.email
    token.save(function (err) {
        if (err) { return console.log(err.message) }
        const mailOptions = {
            from: 'no-reply@payment-processor.com',
            to: email_destination,
            subject: 'Verificación de cuenta en payment-processor.com',
            text: 'Hola,\n\nPor favor, para verificar su cuenta haga clic en el siguiente enlace: \n' + 'http://localhost:8000' + '\/token/confirmation\/' + token.token + '\n'
        }

        mailer.sendMail(mailOptions, function (err) {
            if (err) { return console.log(err.message) }
            console.log('Se envió un mail de confirmación a: ' + email_destination)
        })
    })
}

module.exports = mongoose.model('Usuario', usuarioSchema) 