var express = require('express');
var path = require('path');
var app = express();

//Routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//static middleware
app.use(express.static('public'));


// Error Handlers Response 404
app.use((req, res, next) => {
    console.log('404 error handler called')
    res.status(404).render('404');
 
});

// Global error Handler Response 404 or 500
app.use((err, req, res, next) => {
    if (err) {
        console.log('Global error handler called', err);
    }
    if(err.status === 404) {
        res.status(404).render('404', { err });
    } else {
        err.message = err.message || 'It looks like something went wrong on the server.';
        res.status(err.status || 500).render('error', { err })
    }        
  });


// Listening port
app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});