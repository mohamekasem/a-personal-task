let Episode = require('./episode');

module.exports = {
    addEpisode: function(req, res){
        let newEpisode = new Episode({
            title: req.body.title,
            servers: {
                nameOfServer: req.body.nameOfServer,
                url: req.body.url
            }
        }).save(function(err, newEp){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(201).send(newEp);
            }
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