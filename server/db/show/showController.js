let Show = require('./show');
let Episode = require('../episode/episode');

module.exports = {
    getAllShows : function(req, res){
        console.log(req)
        res.send('weeeeeeeeeeee')
    }
}

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
        })
    },

    addEpisode: function(req, res){
        
    }
  //  ,

    // getEpisode: function(req,res) {
    //     Show.find({}).populate({path: 'episode', model: 'Episode'}).exec(function(err,episodes){
    //         if(err){
    //             res.status(500).send(err);
    //         }else {
    //              res.send(episode);  
    //         }
    //      })    
    // },

    // updateEpisodes : function(req, res){
    //     Episode.findOne({_id: req.body.productId}, function(err, product){
    //         if(err){
    //             res.status(500).send(err);
    //         }else {
    //        Show.update({_id: req.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishList) {
    //                 if(err){
    //                     res.status(500).send(err);
    //                 }else {
    //                     res.send(wishList);
    //                 }
    //             })
    //         }
    //     })
    // }
}