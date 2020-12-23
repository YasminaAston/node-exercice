const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authAgent');

const agent_controller = require('../controllers/agentController');

router.get('/',auth(),agent_controller.agent_list);
router.post('/register', agent_controller.agent_register);
router.post('/login', agent_controller.agent_login);


module.exports = router;

