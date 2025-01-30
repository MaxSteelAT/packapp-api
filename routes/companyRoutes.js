const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/all', companyController.getAll);
router.get('/count', companyController.getCount);
router.get('/count-v2', companyController.getCountv2);

module.exports = router;