var express = require('express');
const mask_controlers= require('../controllers/mask');
var router = express.Router();

/* GET mask */ 
router.get('/', mask_controlers.mask_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mask', { title: 'Search Results' });
});

module.exports = router;
