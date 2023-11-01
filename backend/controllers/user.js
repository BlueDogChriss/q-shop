const UserDB = require("../models").User;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateUser = require("./validations/user");


const controler = {

    //add a new user
    register: async (req, res) => {
        
        const newUser = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        };

        let errors = await validateUser.register(newUser);
        
        console.log(newUser);

        if (Object.keys(errors).length === 0) {
            UserModel.create(newUser).then(() => {
                res.status(201).send({ message: "User registered successfully." })
            }).catch((err) => {
                res.status(501).send(err);
            })
        } else {
            return res.status(400).send(errors);
        }
    },

    // //get current user
    getCurrentUser: async (req, res) => {
        const user = req.params.user;
        if (!user)
        {
            return res.status(400).send("No user specified");
        }
        console.log(req.headers.authorization);
        const token = req.headers.authorization;
        if (!token){
            return res.status(200).send();
        }
        const { userId } = jwt.decode(token);
        const currentUser = await UserDB.findByPk(userId);
        res.status(200).send({ currentUser });
    },
    
    

    login: async (req, res) => {
        UserDB.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user === null) {
                    res.status(401).send({
                        message: "Acest cont nu exista!",
                    });
                } else {
                    bcryptjs.compare(
                        req.body.password,
                        user.password,
                        function (err, result) {
                            if (result) {
                                const token = jwt.sign(
                                    {
                                        email: user.email,
                                        userId: user.id,
                                    },
                                    "secret",
                                    function (err, token) {
                                        res.cookie("jwt", token, { httpOnly: true })
                                        res.status(200).send({
                                            message:
                                                "Te-ai autentificat cu succes!",
                                            token: token,
                                            user: user,
                                        });
                                    }
                                );
                            } else {
                                res.status(401).send({
                                    message: "Acest Cont nu exista!",
                                });
                            }
                        }
                    );
                }
            })
            .catch((error) => {
                console.log(error.message);
                res.status(503).send({
                    message: "Service unavailable",
                });
            });
    },

    logout: (req, res) => {
        req.session.reset();
        res.status(200).send("You've been logged out");
    },

    getAllUsers: async (req, res) => {
        UserDB.findAll()
            .then((user) => res.status(200).send(user))
            .catch((err) => res.status(500).send(err));
    },

    deleteUser: async (req, res) => {
        if (req.body.email) {
            const user = await UserDB.findOne({
                where: { email: req.body.email },
            });

            if (user) {
                try {
                    await user.destroy();
                    res.status(200).send({ message: "User sters" });
                } catch {
                    res.status(500).send({ message: "Server error" });
                }
            } else {
                res.status(400).send({ message: "Nu exista userul cautat" });
            }
        } else {
            res.status(400).send({ message: "Pune-n naiba emailul pe body!" });
        }
    },

    getUserByEmail: async (req, res) => {
        const email = req.headers.email;

        try {
            const user = await UserDB.findOne({
                where: { email: email }
            });

            if (user) {
                res.status(200).json({ exists: true });
            } else {
                res.status(200).json({ exists: false });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};


module.exports = controler