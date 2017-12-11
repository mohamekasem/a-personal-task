let showCtrl = require('../db/show/showController');
let episodeCtrl = require('../db/episode/episodeController');

module.exports = function(app, express) {
        //***********\show routes/ *********************\\
                //********get all anime & movie anime ***********\\                
    app.get('/show/get/all/', showCtrl.getAll)        
                    /*******get all anime by type******/
    app.get('/show/get/list/:type', showCtrl.getAllShowsByType);
                    //********get anime info***********\\
    app.get('/show/get/one/info/:id', showCtrl.getAnimeInfoById);
                    //********search for anime ***********\\
    app.get('/show/search/:title', showCtrl.searchForAnime)

                     /*               admin             */  
                 // note: fix update info to allow update for every thing
                    
                    //********add new anime ***********\\
    app.post('/show/shA/admin/post/new/', showCtrl.postNewShow);
                        //********delete anime ***********\\
    app.delete('/show/shA/admin/delete/anime/id', showCtrl.deleteAnimeById);

    app.put('/update/anime/img/:id', showCtrl.updateAnimeInfo)
                    

        //*****************\episode routes/ *********************\\

            /*          get all episodes          */
    app.get('/episodes/get/all', episodeCtrl.getAll);
            /*    get all episodes for one anime  */
    app.get('/episodes/get/all_ep_for_one/:id', episodeCtrl.getAllEpisodesForOneAnime);
            /*    get  episode by id  */            
    app.get('/episodes/get/one/:id', episodeCtrl.getEpisodeByAnimeId)
        
                     /*               admin             */  
                //note: add update for episode data
                    
                 /*       general episode add       */
    app.post('episodes/shA/admin/add/new_episode', episodeCtrl.addEpisode);
                 /*   delet all episodes  for one anime */
    app.delete('/delete/shA/admin/all/ep/:id', episodeCtrl.deleteAllEpisodes);
                /*       delete episode by _id       */
    app.delete('/episodes/shA/admin/delete/one/:id', episodeCtrl.deleteEpById);    
                /*       delete all episode        */        
    app.delete('episodes/shA/admin/delete/all', episodeCtrl.deleteEps);

};
