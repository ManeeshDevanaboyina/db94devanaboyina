var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mask_controller = require('../controllers/mask');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// mask ROUTES ///
// POST request for creating a mask.
router.post('/masks', mask_controller.mask_create_post);
// DELETE request to delete mask.
router.delete('/masks/:id', mask_controller.mask_delete);
// PUT request to update mask.
router.put('/masks/:id', mask_controller.mask_update_put);
// GET request for one mask.
router.get('/masks/:id', mask_controller.mask_detail);
// GET request for list of all mask items.
router.get('/masks', mask_controller.mask_list);
module.exports = router;