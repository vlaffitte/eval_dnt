// ----------------------------------------------
// Importation de la connexion à la bdd
// ----------------------------------------------
const dataBase = require('../db/db-connection');

// ----------------------------------------------
// Création d'un constructeur pour la création et la mise à jour des enregistrements
// ----------------------------------------------
const UserConstructor = function (user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.role = user.role;
    this.age = user.age;
};

// ----------------------------------------------
// Récupérer l'ensembles des users
// ----------------------------------------------
getAllUsers = result_bdd_request => {
    dataBase.query("SELECT * FROM user", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });
};


// ----------------------------------------------
// Créer un nouvel user en BDD
// ----------------------------------------------

createUser = (newUser, result_bdd_request) => {
    dataBase.query('INSERT INTO user SET id = ?, username = ?, password = ?, first_name = ?, last_name = ?, email = ?, role = ?, age = ?' [newUser.id, newUser.username, newUser.password, newUser.first_name, newUser.last_name, newUser.email, newUser.role, newUser.age ],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            result_bdd_request(null, { id: response.insertId, ...newUser });
        });
};

// ----------------------------------------------
// Supprimer un user par son ID
// ----------------------------------------------
deleteUserById = (selectedID, result_bdd_request) => {
    dataBase.query("DELETE FROM user WHERE id = ?", selectedID, (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        if (response.affectedRows == 0) {
            result_bdd_request({ kind: "index_not_found" });
            return;
        }
        result_bdd_request(null, response);
    });
};


// ----------------------------------------------
// ----------------------------------------------
module.exports = {
    UserConstructor,
    getAllUsers,
    createUser,
    deleteUserById
};