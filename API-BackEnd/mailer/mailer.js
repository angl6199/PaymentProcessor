const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jorge.abshire73@ethereal.email',
        pass: 'yWgMKWWUu81Xqpr6pB'
    }
};

module.exports = nodemailer.createTransport(mailConfig)