var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Bienvenido, esta API solo puede ser utilizada por usuarios que hayan iniciado sesión.');
});

module.exports = router;
