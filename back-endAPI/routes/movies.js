const express = require('express')
const movieSchema = require('../models/Movie')

const router = express.Router();

router.get("/all", (req, res) => {
    movieSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

router.post("/add", (req, res) => {
    const movie = movieSchema(req.body);
    movie
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

module.exports = router;