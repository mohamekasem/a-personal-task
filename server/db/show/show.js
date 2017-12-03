let mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = mongoose.Schema.Types.ObjectId;

let show = new Schema({
    title: {type: String, require: true, default: "new show", unique: true},
    img: {type: String, default: "/assets/imgs/1.jpg"},
    imgCap : {type: String, default: "/assets/imgs/1.jpg"},
    // episodesNum: {type: Num},
    aired: String,
    type: String,          
    studios: String,
    genres: String
});

module.exports = mongoose.model('Show', show);