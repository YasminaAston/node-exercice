const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authAcheteur');

const acheteur_controller = require('../controllers/acheteurController');

router.get('/',auth(),acheteur_controller.acheteur_list);
router.post('/register', acheteur_controller.acheteur_register);
router.post('/login', acheteur_controller.acheteur_login);


module.exports = router;