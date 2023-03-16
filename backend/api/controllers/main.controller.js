var providers = require('../models/providers.model');
const { Provider } = require("../db/db");
const { ObjectId } = require('mongodb');

// Util Functions
// Check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res, error) {
    res.status(200).send('Somthing went wrong.\n' + error);
}

//CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

//POST
//uri: /api/providers
module.exports.create = function (req, res) {
    try {
        var provider = req.body;

        // Add new provider to list
        Provider.create(provider)
            .then(result => {
                res.status(201).send(result);
            })
            .catch(error => { handleError(res, error) });

    } catch (error) {
        handleError(res, error)
    };
}

//GET ALL
//uri: /api/providers
module.exports.readAll = function (req, res) {
    try {
        Provider.find().
            then(result => {
                if (isEmptyList(result)) {
                    res.status(404).send("Providers list is empty.")
                }
                res.status(200).send(result);
            }).catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error)
    };
}

//GET ONE
//uri: /api/providers/123
module.exports.readOne = function (req, res) {
    try {
        const id = new ObjectId(req.params.id);
        Provider.find({ '_id': id }).
            then(result => {
                if (isEmptyList(result)) {
                    res.status(404).send("Providers list is empty.")
                }
                console.log(result);
                res.status(200).send(result);
            }).catch(error => handleError(res, error));

    } catch (error) {
        handleError(res, error);
    }

}

//PUT
//uri: /api/providers/123
module.exports.update = function (req, res) {
    let id = new ObjectId(req.params.id);
    let provider = req.body;
    try {
        Provider.findOneAndUpdate({ '_id': id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404).send("list is empty. Cannot update.")
                }

                res.status(200).send(result);
            }).catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error);
    }
}

//DELETE ONE
//uri: /api/providers/123
module.exports.deleteOne = function (req, res) {
    try {
        let id = new ObjectId(req.params.id);
        console.log(req.params.id)
        Provider.findOneAndDelete({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404).send("Providers list is empty. Cannot delete.");
                }
                res.status(200).send(result); // res.status(404)
            }).catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error);
    }
}

//DELETE ALL
//uri: /api/providers
module.exports.deleteAll = function (req, res) {
    try {
        Provider.deleteMany({})
        .then( result => {
            if (result.deletedCount === 0) {
                res.status(404).send("Providers list is empty. Cannot delete.")
            }
            res.status(200).send("All providers deleted.\n " + String(result));
        })
    } catch (error) {
        handleError(res, error)
    }
}

