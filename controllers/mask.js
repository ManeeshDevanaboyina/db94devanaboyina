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

// VIEWS
// Handle a show all view
exports.mask_view_all_Page = async function (req, res) {
    try {
        themask = await mask.find();
        res.render('mask', { title: 'Mask Search Results', results: themask });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};


// for a specific mask.
exports.mask_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mask detail: ' + req.params.id);
};

// Handle mask create on POST. 
exports.mask_create_post = async function (req, res) {
    console.log(req.body)
    let document = new mask();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"color":"Red", "price":30, "size":"XL"}
    document.color = req.body.color; 
    document.price = req.body.price; 
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle mask delete form on DELETE.
exports.mask_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mask delete DELETE ' + req.params.id);
};
// Handle mask update form on PUT.
exports.mask_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mask update PUT' + req.params.id);
};