const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

let mailConfig;

if (process.env.NODE_ENV == "production"){
    const options = {
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    }
    mailConfig = sgTransport(options)
}
else{
    if (process.env.NODE_ENV == "staging"){
        console.log("I AM IN STAGING");
        const options = {
            auth: {
                api_key: process.env.SENDGRID_API_KEY
            }
        }
        mailConfig = sgTransport(options)
    }
    else{
        mailConfig = {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'jorge.abshire73@ethereal.email',
                pass: 'yWgMKWWUu81Xqpr6pB'
            }
        }
    }
}

module.exports = nodemailer.createTransport(mailConfig)