let Episode = require('./episode');
let Show = require('../show/show');

module.exports = {
    addEpisode: function(req, res){
        let anime_id = undefined;
        Show.findOne({title: req.body.title}, function(err, anime){
            if(err){
                console.log('test')
                res.status(500).send(err);
            }else{
                anime_id = anime._id;
            }
        }).then(function(data){
            console.log(typeof anime_id, 'anime_id');
            let newEpisode = new Episode({
                title: req.body.title,
                servers: req.body.servers,
                anime_id: anime_id      
            }).save(function(err, newEp){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(201).send(newEp);
                }
            })
        })
    },

    getAllEpisodes: function(req, res){
        Episode.find({}, function(err, allEp){
            if(err){
                res.status(500);
            }else{
                res.status(200).send(allEp);
            }
        })
    }
};