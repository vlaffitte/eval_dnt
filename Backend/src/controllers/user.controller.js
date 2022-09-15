// ----------------------------------------------
// Importantion du modèle pour la table anime
// ----------------------------------------------
const userModel = require('../models/user.model');

// ----------------------------------------------
// Récupérer l'ensembles des users
// ----------------------------------------------
getAllUsers = (request, response) => {
    userModel.getAllUsers((error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Une erreur est survenue en essayant de récupérer la table user."
            });
        else response.send(data);
    });
};


// ----------------------------------------------
// Créer un nouvel enregistrement en BDD
// ----------------------------------------------
createUser = (request, response) => {
     // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        // #swagger.parameters['id'] = { description: 'ID do usuário.' }

        /* #swagger.parameters['filtro'] = {
	       in: 'query',
               description: 'Um filtro qualquer.',
               type: 'string'
        } */
    // Vérification si la requette est complété (le JSON)
    // le request.body permet de récupérer le contenue de la requette
    if (!request.body) {
        response.status(400).send({
            message: "Le contenue ne peut être vide !"
        });
    }

    // Sauvegarde du nouvel enregistrement dans le BDD
    userModel.createUser(new userModel.UserConstructor(request.body), (error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Des erreurs sont apparues en créant le nouvel user."
            });
        else response.send(data);
    });
};

// ----------------------------------------------
// Supprimer un user par son ID
// ----------------------------------------------
deleteUserById = (request, response) => {
    userModel.deleteUserById(request.params.id, (error, data) => {
        if (error) {
            if (error.kind === "index_not_found") {
                response.status(404).send({
                    message: `L'id ${request.params.id} de la table user n'a pas était trouvé.`
                });
            } else {
                response.status(500).send({
                    message: "Impossible de supprimer l'enregistrement de la table user avec l'id " + request.params.id
                });
            }
        } else response.send({ message: `L'enregistrement de la table user à bien était supprimé` });
    });
};


// ----------------------------------------------
// ----------------------------------------------
module.exports = {
    getAllUsers,
    createUser,
    deleteUserById
}