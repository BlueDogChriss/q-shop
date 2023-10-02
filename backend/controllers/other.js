const connection = require("../models").connection;

const controller = {
    reset: (req, res) => {
        connection
            .sync({ force: true })
            .then(() => {
                res.status(201).send({
                    message: "Database reset"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Reset DB error",
                    err: err.message
                });
            });
    }
};

module.exports = controller;
