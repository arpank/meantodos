/**
 * Created by Arpan on 12/27/2016.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');
var todos = require('./routes/todos');
var filedownload = require('./routes/filedownload');

// View engine
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api/v1/', todos);
app.use('/api/v2/', filedownload);
//////////////////////////////////////////////////////////
// Added by arpan to see if the response works.
app.get('/helo', function (req, res) {
    res.send('Hello World!')
});



app.get('/helooo', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res, next) {
   // next()
    res.send('Hello from cc!')

});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
};

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
};

app.get('/mul', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
});


app.get('/download', function(req, res){
    //var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
    file_name = req.params.id;
    var file =    'c://users//arpan/pwd.txt';

    res.download(file); // Set disposition and send it.
});

//res.attachment();
// Content-Disposition: attachment

//res.attachment('path/to/logo.png');

/*
app.get('/download/:id', function(req, res){
    //var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
    file_name = req.params.id;
    var file =    'c://users//arpan/pwd.txt';

    res.download(file); // Set disposition and send it.
    res.download(file, 'report.txt', function(err){
        if (err) {
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
        } else {
            // decrement a download credit, etc.
        }
    });


});*/
/////////////////////////////////////////////////////////////






app.listen(3000, function()
    {
        console.log('server started on port 3000');
    }
);


