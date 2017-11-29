const mongoose = require('mongoose'),
      Shcema = mongoose.Shcema;

let episode = new Shcema ({
    title: {type: String, require: true},
    views: {type: Number, default: "0"},
    // ma be i will make a servers schema ***
    servers: {type:Object}//[{},{}] 
});


module.exports = mongoose.model('Episode', episode);