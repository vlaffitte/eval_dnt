// ----------------------------------------------
// Importation de la connexion à la bdd
// ----------------------------------------------
const dataBase = require('../db/db-connection');

// ----------------------------------------------
// Création d'un constructeur pour la création et la mise à jour des enregistrements
// ----------------------------------------------
class UserConstructor {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.role = user.role;
        this.age = user.age;
    }
}

// ----------------------------------------------
// Récupérer l'ensembles des users
// ----------------------------------------------
getAllUsers = (done) => {
    dataBase.query("SELECT * FROM user", (err, res) => {
        if (err) {
            done(err);
        }
        // Le premier null représente les erreurs
        done(null, res);
    });
};


// ----------------------------------------------
// Créer un nouvel user en BDD
// ----------------------------------------------

createUser = (newUser, done) => {
    //console.log('INSERT INTO user SET id = ?, username = ?, password = ?, first_name = ?, last_name = ?, email = ?, role = ?, age = ?');
    // console.log(newUser);
    
    dataBase.query(
        'INSERT INTO user SET id = ?, username = ?, password = ?, first_name = ?, last_name = ?, email = ?, role = ?, age = ?', [newUser.id, newUser.username, newUser.password, newUser.first_name, newUser.last_name, newUser.email, newUser.role, newUser.age],
    // dataBase.query('INSERT INTO user SET id = 15, username = "rtr", password = "rerer", first_name = "reer", last_name = "reer", email = "reerer", role = "Admin", age = 32',
    (error, result, fields) => {
            if (error) {
                done(error);
            }
            console.log("created user:  ", { id: done.insertId, ...newUser });
            done(null, { id: result.insertId, ...newUser });

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