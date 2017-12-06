const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./config/middleware.js')(app, express);
require('./config/routs.js')(app, express);


// db config
var mongoURI = 'mongodb://sh200:1234@ds131826.mlab.com:31826/shadow';

mongoose.connect(mongoURI);

//start the server
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`app is listen on ${port}`);
})