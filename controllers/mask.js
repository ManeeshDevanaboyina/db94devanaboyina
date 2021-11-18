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


// for a specific mask. 
exports.mask_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await mask.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Mask delete on DELETE.
exports.mask_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await mask.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

//Handle mask update form on PUT. 
exports.mask_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await mask.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.mask_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await mask.findById( req.query.id) 
        res.render('maskdetail',  
{ title: 'mask Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a mask.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mask_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('maskcreate', { title: 'mask Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
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

// Handle building the view for updating a mask. 
// query provides the id 
exports.mask_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await mask.findById(req.query.id) 
        res.render('maskupdate', { title: 'mask Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.mask_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await mask.findById(req.query.id) 
        res.render('maskdelete', { title: 'mask Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
