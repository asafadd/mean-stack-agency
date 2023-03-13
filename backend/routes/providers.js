// Provider Router

var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');

/* GET list page. */
router.get('/', providersController.list);

/* GET details page. */
router.get('/details/:id', providersController.details);

/* GET edit page. */
router.get('/edit/:id', providersController.edit);

/* POST edit page. */
router.post('/update/:id', providersController.update);

/* GET add page. */
router.get('/add-provider', providersController.addform);

/* POST add page. */
router.post('/add', providersController.add);

module.exports = router;
