let mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = mongoose.Schema.Types.ObjectId;

let show = new Schema({
    title: {type: String, require: true, default: "new show", unique: true},
    img: {type: String},
    imgCap : {type: String},
    // episodesNum: {type: Num},
    aired: String,
    type: String,          
    studios: String,
    genres: String,
    trUrl: String,
    story: String,
    state: String
});

module.exports = mongoose.model('Show', show);