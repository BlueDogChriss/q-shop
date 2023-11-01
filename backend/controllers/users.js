const UsersDB = require("../models").users;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const controler = {

    //get current user
    getCurrentUser: async (req, res) => {
        const user = req.params.user;
        if (!user) return res.status(400).send("No user specified");
        return res.status(200).send(user);
    },

    //add a new user
    addUser: async (req, res) => {
        try {
            const result = await UsersDB.findOne({ where: { email: req.body.email } });
            if (result) {
                return res.status(409).send({ message: "Email already in use" })
            }
        } catch (err) {
            //write error message
            console.error(err);
        }

        const user = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        };

        try {
            user.password = await bcrypt.hash(user.password, 12)
        } catch (err) {
            console.error(err);
        };

        let errors = {

        }
        //validations

        if (
            !user.lastName ||
            !user.firstName ||
            !user.email ||
            !user.password ||
            !user.phone
        ) {
            console.log(user);
            console.log("Nu au fost completate toate campurile");
            errors.emptyFields = "Nu au fost completate toate campurile"
        } else {
            if (user.lastName.length < 2) {
                error.nume = "Numele introdus trebuie sa contina minim 2 caractere"
            }

            if (user.firstName.length < 2) {
                errors.prenume = "Prenumele introdus trebuie sa contina minim 2 caractere"
            }

            if (!user.email.includes("@")) {
                errors.email = "Aceasta nu este o adresa de email"
            }
            if (user.phone.length !== 10) {
                console.log(
                    "Numarul de telefon trebuie sa fie de 10 cifre!"
                );
                errors.telefon =
                    "Numarul de telefon trebuie sa fie de 10 cifre!";
            } else if (
                !user.phone.match("^[0-9]+$")
            ) {
                console.log(
                    "Numarul de telefon trebuie sa contina doar cifre!"
                );
                errors.telefon2 =
                    "Numarul de telefon trebuie sa contina doar cifre!";
            }

            if (Object.keys(errors).length === 0) {
                console.log(user)
                try {
                    const newUser = await UsersDB.create(user)
                    res.status(201).send(user);
                } catch (err) {
                    controler.error(err);
                }
            } else {
                res.status(400).send({ err: errors });
            }
        }
    },

    login: async (req, res) => {
        UsersDB.findOne({ where: { email: req.body.email } })
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
        UsersDB.findAll()
            .then((users) => res.status(200).send(users))
            .catch((err) => res.status(500).send(err));
    },

    deleteUser: async (req, res) => {
        if (req.body.email) {
            const user = await UsersDB.findOne({
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
    
    getCurrentUser: async (req, res) => {
        console.log(req.headers.authorization);
        const token = req.headers.authorization;
        if (!token)
            return res.status(200).send();
        const { userId } = jwt.decode(token);
        const currentUser = await UsersDB.findByPk(userId);
        res.status(200).send({ currentUser });
    },

    getUserByEmail: async (req, res) => {
        const email = req.headers.email;

        try {
            const user = await UsersDB.findOne({
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