const express = require('express')
const userSchema = require('../models/User')

const router = express.Router();

router.get("/all", (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

router.get("/search/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

router.post("/add", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

router.put("/update/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, email, contrasena, suscripcion1, suscripcion2} = req.body;
    userSchema
    .updateOne({_id: id}, {$set: {nombre, apellido, email, contrasena, suscripcion1, suscripcion2}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;