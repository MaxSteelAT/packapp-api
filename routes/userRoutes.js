// Modificado

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/list', userController.getAllUsers);
router.get('/test', userController.testing);

module.exports = router;