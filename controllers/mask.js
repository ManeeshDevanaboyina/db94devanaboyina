var mask = require('../models/mask');


// List of all mask
exports.mask_list = async function (req, res) {
    try {
        themask = await mask.find();
        res.send(themask);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific mask.
exports.mask_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mask detail: ' + req.params.id);
};
// Handle mask create on POST.
exports.mask_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: mask create POST');
};
// Handle mask delete form on DELETE.
exports.mask_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mask delete DELETE ' + req.params.id);
};
// Handle mask update form on PUT.
exports.mask_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mask update PUT' + req.params.id);
};