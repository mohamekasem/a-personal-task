let Show = require('./show');
let Episode = require('../episode/episode');

module.exports = {
    getAllShows: function (req, res) {  
        Show.find({}, function(err, list){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(list);
            }
        });     
    },

    postNewShow: function (req, res){
      let newShow = new Show ({
        title: req.body.title,
        img: req.body.url,
        aired: req.body.aired,
        type: req.body.type,          
        studios: req.body.studios,
        genres: req.body.genres
      }).save(function(err, state){
          if (err){
              res.status(500).send(state);
          }else {
              res.status(201).send(state);
          }
      });  
    },

    getOneAnime: function(req, res){
        Show.findById(req.params.id, function(err, anime){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(anime);
            }
        });
    },
    
    getEpisodes: function(req,res) {
        Show.findById(req.params.id).populate({path: 'episodes', model: 'Episode'}).exec(function(err,episodes){
            if(err){
                res.status(500).send(err);
            }else {
                 res.send(episodes);  
            }
         });   
    },

    updateEpisodes : function(req, res){
        // console.log(req.body)
        Episode.findOne({_id: req.body.episode_id}, function(err, episode){
            if(err){
                res.status(500).send(err);
            }else {
           Show.update({_id: req.body.anime_id}, {$addToSet:{episodes: episode._id}}, function(err, state) {
                    if(err){
                        res.status(500).send(err);
                    }else {
                        res.send(state);
                    }
                })
            }
        });
    },

    getOneEps: function(req, res){
        // Episode.findOne(_id: req.body._id, function(err, episode){
        //     if(err){

        //     }
        // });
        // Show.fin
    }

}