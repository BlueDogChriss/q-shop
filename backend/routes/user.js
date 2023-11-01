const express = require('express');
const router = express.Router();
const usersController = require('../controllers/').user;
const middleware = require('../controllers/').middleware

router.post('/register', usersController.register);
router.post('/login', usersController.login);
// router.get('/getAllUsers', middleware.checkAuth, usersController.getAllUsers);
router.get('/getAllUsers', usersController.getAllUsers);
// router.delete('/deleteUser', middleware.checkAuth, isAdmin, usersController.deleteUser);
router.delete('/deleteUser', usersController.deleteUser);
router.get("/current", usersController.getCurrentUser);
router.get("/getUserByEmail",usersController.getUserByEmail);


module.exports = router;