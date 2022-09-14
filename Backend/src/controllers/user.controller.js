// ----------------------------------------------
// Importantion du modèle pour la table anime
// ----------------------------------------------
const userModel = require('../models/user.model');

// ----------------------------------------------
// Récupérer l'enssembles des users
// ----------------------------------------------
getAllUsers = (request, response) => {
    userModel.getAllUsers((error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Une erreur est survenue en essayant de récupérer la table anime."
            });
        else response.send(data);
    });
};


// ----------------------------------------------
// ----------------------------------------------
module.exports = {
    getAllUsers
}