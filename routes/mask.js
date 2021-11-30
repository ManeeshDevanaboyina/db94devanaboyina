var express = require('express');
const mask_controlers= require('../controllers/mask');
var router = express.Router();

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET mask */ 
router.get('/', mask_controlers.mask_view_all_Page );
module.exports = router;

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('mask', { title: 'Search Results masks' });
//});

router.get('/',mask_controlers.mask_view_all_Page);

/* GET detail Mask page */
router.get('/detail', mask_controlers.mask_view_one_Page);

/* GET create mask page */
router.get('/create',secured, mask_controlers.mask_create_Page);

/* GET create update page */ 
router.get('/update',secured, mask_controlers.mask_update_Page); 


/* GET create mask page */ 
router.get('/delete',secured, mask_controlers.mask_delete_Page); 

module.exports = router;
