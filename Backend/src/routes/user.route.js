// ---------------------------------------
// Importation du module router de express
// ----------------------------------------

const router = require('express').Router();

// ------------------------------------------------------------------
// Définition de l'ensembles des constantes utilisant le controller
// ------------------------------------------------------------------

const {
    getAllUsers, createUser
} = require('../controllers/user.controller');

 /** Exemple d'écriture pour la documentation swagger du GET /users
  * @swagger 
  * /users:
  *   get:
  *     summary: Permet de récupérer l'ensemble des users présent dans la table
  *     tags:
  *      - User
  *     responses:
  *       200:
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: array
  *                   items:
  *                     type: object
  *                     properties:
  *                       id:
  *                         type: integer
  *                         description: ID dans la BDD.
  *                         example: 1
  *                       username:
  *                         type: string
  *                         description: Username of User
  *                         example: bMarley
  *                       password:
  *                         type: string
  *                         description: Users's passsword.
  *                         example: pass4word
  *                       first_name:
  *                         type: string
  *                         description: First name of User.
  *                         example: Bob
  *                       last_name:
  *                         type: string
  *                         description: Last name of User.
  *                         example: Marley
  *                       email:
  *                         type: string
  *                         description: Email of User.
  *                         example: bmarley@gmail.com 
  *                       role:
  *                         type: string
  *                         description: Role of User, must be Admin or User
  *                         example: bmarley@gmail.com 
  *                       age:
  *                         type: int
  *                         description: Age of User 
  *                         example: 33
  *   patch:
  *     summary: Permet de créer un users
  *     tags:
  *         - User
  *             
  *   delete:
  *     summary: permet de supprimer un user
  *     tags:
  *         - User
  *             
  */

// -------------
// Users Routes 
// -------------

router.get('/', getAllUsers); // GET localhost:8081/api/v1/users
router.post('/', createUser); // CREATE localhost:8081/api/v1/users
router.delete('/:id', deleteUserById); // DELETE localhost:8081/api/v1/users/:id

module.exports = router; 