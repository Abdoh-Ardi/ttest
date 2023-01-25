const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequilize.Op;

// create and save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }


    // Create a Tutorial 
    const tutorial = {
        title: req.body.title,
        desciption: req.body.desciption,
        published: req.body.published ? req.body.published : false
    };

    //Save Tutorial in the database
    Tutorial.create(tutorial).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the Tutorial."
        });
    });
    // retrieve all tutorials  from the database
    exports.findAll = (req, res) => {
        const title = req.body;
    }
    Tutorial.findAll({ where: condition })


} 