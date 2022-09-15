// ---------------------------------------
// Importation du module router de express
// ----------------------------------------
const router = require('express').Router();

// ------------------------------------------------------------------
// Définition de l'enssembles des constantes utilisant le controller
// ------------------------------------------------------------------
const {
    getAllUsers, createUser
} = require('../controllers/user.controller');

// -------------
// Users Routes 
// -------------

router.get('/', getAllUsers); // GET localhost:8081/api/v1/users
router.post('/', createUser); // CREATE localhost:8081/api/v1/users
router.delete('/:id', deleteUserById); // DELETE localhost:8081/api/v1/users/:id

module.exports = router; 