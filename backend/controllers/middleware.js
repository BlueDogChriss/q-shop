const jwt = require("jsonwebtoken");
const UsersDB = require("../models").users;

const controller = {
    checkAuth: (req, res, next) => {
        try {
            const token = req.headers.authorization;
            jwt.verify(token, "secret", function(err, decoded){
                console.log(decoded);
                req.userData = decoded;
            });
            // console.log(decodedToken)

            next();
        } catch (e) {
            return res.status(401).json({
                message: "Trebuie să fii logat ca să apelezi această rută!",
                error: e
            });
        }
    },

    isAdmin: async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            const decodedToken = jwt.verify(token, "secret");
            const nebunie = decodedToken.userId;
            const user = await UsersDB.findByPk(nebunie);
            if (!user.dataValues.id) {
                res.status(400).send("account not found lol");
            }
        } catch {
            res.status(500).send({ message: "Internal server problem" }); // nu e autorizat problema token
        }
    }
};

module.exports = controller;
