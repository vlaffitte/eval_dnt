// ----------------------------------------------
// Importation du module router de express
// ----------------------------------------------
const router = require('express').Router();

// ----------------------------------------------
// Définition de l'enssembles des constantes utilisant le controller
// ----------------------------------------------
const {
    getAllUsers
} = require('../controllers/user.controller');

///////////////////
/// Users Routes 
//////////////////

router.get('/', getAllUsers);

module.exports = router; 