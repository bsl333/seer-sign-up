const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.post('/', usersCtrl.create);

module.exports = router;
