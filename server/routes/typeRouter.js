const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const { check } = require('../controllers/userController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');


router.post('/', checkRoleMiddleware('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);
router.delete('/',);

module.exports = router;