var express = require('express');
var path = require('path');
var app = express();


var indexRouter = require('./routes/index');


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//static middleware
app.use(express.static('public'));

//Routes
app.use('/', indexRouter);


app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});