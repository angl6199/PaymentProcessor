const mongoose = require('mongoose')
const Pago = require('../../models/pago')
const Usuario = require('../../models/usuario')
const { expect } = require('chai')

describe('Test Suite "pagos"', function () {
    beforeEach(function (done) {
        var mongoDB = 'mongodb://localhost:27017/payment_processor'
        mongoose.connect(mongoDB, { useNewUrlParser: true })

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function () {
            done()
        })

    })

    afterEach(function (done) {
        Usuario.deleteMany({}, function (err, success) {
            if (err) console.log(err)
            Pago.deleteMany({}, function (err, success) {
                if (err) console.log(err)
                if (err) console.log(err)
                const db = mongoose.connection
                db.close()
                done()
            })
        })
    })


    //Tests...
    describe('TC:1 - Es posible crear un objeto de la clase Pago', () => {
        it('Paso 1 - Crear usuario ordenante', (done) => {
            let usuario = new Usuario({ nombre: 'Angel', apellidos: 'Heredia', email: 'angel@gmail.com', password: 'asdf', rol: 'Cliente', activo: true })
            Usuario.add(usuario, function (err, success) {
                Usuario.find({}, function (err, usuarios) {
                    expect(usuarios.length).to.be.eq(1)
                    done()
                })
            })
        })
        it('Paso 2 - Crear usuario beneficiario', (done) => {
            let usuario = new Usuario({ nombre: 'Carlos', apellidos: 'Conde', email: 'carlos@gmail.com', password: 'asdf', rol: 'Cliente', activo: true })
            Usuario.add(usuario, function (err, success) {
                Usuario.find({}, function (err, usuarios) {
                    expect(usuarios.length).to.be.eq(1)
                    done()
                })
            })
        })
        it('Paso 3 - Crear pago con relación a los usuarios creados', (done) => {
            Usuario.findOne({ email: "angel@gmail.com" }, function (err, ordenante) {
                Usuario.findOne({ email: "carlos@gmail.com" }, function (err, beneficiario) {
                    let pago = new Pago({ _ordenanteId: ordenante._id, _beneficiarioId: beneficiario._id, monto: 100, divisa: "MXN", precioPorDivisa: 1, divisaApesos: 100, estado: "Completado" })
                    Pago.add(pago, function (err, success) {
                        Pago.find({}, function (err, pagos) {
                            expect(pagos.length).to.be.eq(1)
                        })
                    })
                })
            })
        })
    });
})

