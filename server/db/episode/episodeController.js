let Episode = require('./episode');
let Show = require('../show/show');

module.exports = {
    addEpisode: function(req, res){
        let anime_id;
        Show.findOne({title: req.body.title}, function(err, anime){
            if(err){
                res.status(500).send(err);
            }else{
                anime_id = anime._id;
            }
        })
        .then(function(data){
            let newEpisode = new Episode({
                ep: req.body.ep,
                servers: req.body.servers,
                anime_id: anime_id,
                anime_name: req.body.title      
            })
            .save(function(err, newEp){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(201).send(newEp);
                }
            });
        });
    },

    getAllEpisodesForOneAnime: function(req, res){
        Episode.find({anime_id: req.params.id}, function(err, allEp){
            if(err){
                res.status(500);
            }else{
                res.status(200).send(allEp);
            }
        });
    },

    deleteAllEpisodes: function(req, res){
        Episode.remove({anime_id: req.params.id}, function(err, state){
            if(err){
                res.status(202).send(err);
            }else{
                res.status(200).send(state);
            }
        });
    },

    getEpisode: function(req, res){
        Episode.findOne({anime_id: req.params.id}, function(err, episode){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(episode);
            }
        });
    },

    getEpisodeById: function(req, res){
        Episode.findOne({_id: req.params.id}, function(err, episode){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(episode);
            }
        });
    },



    /*//////////////////////////////////////////////
        test functions
    */
    getAll: function(req, res){
        Episode.find({}, function(err, all){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(all);
            }
        });
    },

    deleteEps: function(req, res){
        Episode.remove({}, function(err, state){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(state);
            }
        });
    }
};