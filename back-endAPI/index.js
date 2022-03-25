const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;
const URI = "mongodb+srv://dbUser:dbUser@cluster0.4acrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const userRoutes = require("./routes/users");
const movieRoutes = require("./routes/movies")

//middleware
app.use(express.json());
app.use('/users', userRoutes);
app.use(express.json());
app.use('/movies', movieRoutes);


//routes
app.get("/", (req, res) => {
    const urls = {
        mensaje: "Bienvenido a nuestra API de Mercado Libre Streaming, siéntete libre de utilizar las siguientes peticiones de consulta:",
        usuarios: "https://mlwebapi.herokuapp.com/users/all   -   Consulta de todos los usuarios",
        peliculas: "https://mlwebapi.herokuapp.com/movies/all    -   Consulta de todas las películas"
    }
    res.send(urls)
});

mongoose.connect(URI).then(() => console.log('Connected to db')).catch((error) => console.log(error));

app.listen(port, () => console.log("Server listening on port", port));