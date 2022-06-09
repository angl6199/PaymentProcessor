const jwt = require('jsonwebtoken')

exports.validateToken = (req, res, next) => {
    const token = req.params.token || req.body.token;
    if (!token) {
        return res.status(403).send("Se necesita un jsonToken para acceder");
    }
    try {
        const decoded = jwt.verify(token, "Esta es mi super clave secreta");
        return next()
    } catch (err) {
        return res.status(401).send("jsonToken no valido");
    }
}