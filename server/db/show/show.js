let mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = mongoose.Schema.Types.ObjectId;

let show = new Schema({
    title: {type: String, require: true, default: "new show"},
    img: {type: String, require:true, default: "some url"},
    // episodesNum: {type: Num},
    aired: String,
    type: String,          
    studios: String,
    genres: String,
    episodes: [{type: ObjectId, ref: "Episode"}]
});

module.exports = mongoose.model('Show', show);