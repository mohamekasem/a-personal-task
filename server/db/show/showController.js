let Show = require('./show');
let Episode = require('../episode/episode');

module.exports = {
    getAllShows: function (req, res) {  
        Show.find({type: req.params.id}, function(err, list){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(list);
            }
        });     
    },

    postNewShow: function (req, res){
      let tit = req.body.title.toLowerCase();
      let newShow = new Show ({
        title: tit,
        img: req.body.url,
        imgCap:req.body.imgCap,
        aired: req.body.aired,
        type: req.body.type,          
        studios: req.body.studios,
        genres: req.body.genres,
        trUrl: req.body.trUrl,
        story: req.body.story,
        state: req.body.state
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
    },

    deleteAnime: function(req, res){
        Show.remove({_id: req.body._id}, function(err, state){
            if(err){
                res.status(500).send(err);
            }else {
                res.send(state);
            }
        })
    },

    getAll: function(req, res){
        Show.find({}, function(err, list){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(list);
            }
        });
    },

    getAllRes: function(req, res){
        Show.find({title: { "$in": req.params.title }}, function(err, list){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(list);
            }
        }); 
    },

    updateAnimeInfo: function(req, res){
        Show.findOneAndUpdate({_id: req.params.id}, {img: req.body.imgUrl}, function(err, state) {                    
            if(err){
                res.status(500).send(err);
            }else {
                res.send(state);
            }
        })  
    }
}