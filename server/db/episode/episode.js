const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

let episode = new Schema ({
    ep: String,
    views: {type: Number, default: "0"},
    servers: Array,
    anime_id: String,
    anime_name: String
});


module.exports = mongoose.model('Episode', episode);