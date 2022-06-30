const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* GET home page */
router.get('/', function(req, res, next) {
    res.render('index', { projects })
});

/* GET about page */
router.get('/about', function(req, res, next) {
    res.render('about', { projects })
});

/* GET project page */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    if(project) {
        res.render('project', { projects });
    } else {
        console.log("Error 404");
    }
    

});


module.exports = router;