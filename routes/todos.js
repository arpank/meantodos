/**
 * Created by Arpan on 12/27/2016.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://arpank:shall123@ds145188.mlab.com:45188/meantodos_arpan',['todos','names']);


router.get('/names', function(req, res, next)
    {
        //res.send('TODOS API');

        db.names.find(function(err, names)
            {
                if(err)
                {
                    res.send(err);
                } else
                {
                    res.json(names);
                }
            }
        );
    }
);

router.get('/todos', function(req, res, next)
    {
        //res.send('TODOS API');

        db.todos.find(function(err, todos)
            {
                if(err)
                {
                   res.send(err);
                } else
                {
                   res.json(todos);
                }
            }
        );
    }
);

router.get('/todo/:id', function(req, res, next)
    {
        //res.send('TODOS API');

        db.todos.findOne({
            _id: mongojs.ObjectId(req.params.id)
        },

            function(err, todo)
            {


                if(err)
                {
                    res.send(err);
                } else
                {
                    res.json(todo);
                }
            }
        );
    }
);

// Save todo

// Save Todo
router.post('/todo', function(req, res, next){
    var todo = req.body;
    if(!todo.text || !(todo.isCompleted + '')){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.save(todo, function(err, result){
            console.log("Saving Shivji"+ todo.toString());
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

// Update Todo
router.put('/todo/:id', function(req, res, next){
    var todo = req.body;
    var updObj = {};

    if(todo.isCompleted){
        updObj.isCompleted = todo.isCompleted;
    }

    if(todo.text){
        updObj.text = todo.text;
    }

    if(!updObj){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        },updObj, {}, function(err, result){
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

// Delete Todo
router.delete('/todo/:id', function(req, res, next){
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    },'', function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;











