const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.post('/', usersCtrl.create);
router.get('/check/email/:email', usersCtrl.checkEmail);
router.get('/check/username/:username', usersCtrl.checkUsername);

module.exports = router;
