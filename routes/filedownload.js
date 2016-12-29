/**
 * Created by Arpan on 12/27/2016.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://arpank:shall123@ds145188.mlab.com:45188/meantodos_arpan',['todos','names']);


router.get('/download/:id', function(req, res){
    //var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
    file_name = req.params.id;
    var file =    'c://users//arpan/pwd.txt';

    res.download(file); // Set disposition and send it.
    res.append('Warning', '199 Miscellaneous warning');
    res.download(file, 'report.txt', function(err){
        if (err) {
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
        } else {
            // decrement a download credit, etc.
        }
    });


});



module.exports = router;











