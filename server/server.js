const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./config/middleware.js')(app, express);
require('./config/routs.js')(app, express);


// db config
let mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/leco';
let db = mongoose.connect(mongoURI, { useMongoClient: true });
db = mongoose.connection

db.once('open',function () {
	console.log('mongoDB is open'); 
})

//start the server
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`app is listen on ${port}`);
})