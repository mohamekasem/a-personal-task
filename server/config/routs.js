let showCtrl = require('../db/show/showController');
let episodeCtrl = require('../db/episode/episodeController');

module.exports = function(app, express) {
                    /*\\\\\\\\\\\get all anime////////////*/
    // note*/ remove an use route and add clear names;
    app.get('/list_anime/:id', showCtrl.getAllShows);
                    //********add new anime ***********\\
    app.post('/add/anime_show', showCtrl.postNewShow);
                        //********delete anime ***********\\
    app.delete('/delete/anime/x', showCtrl.deleteAnime);
                    //********get anime info***********\\
    app.get('/anime/info/:id', showCtrl.getOneAnime);
                    //********get anime and his episodes******\\
    app.get('/info/:id', showCtrl.getEpisodes);
    app.get('/get_episod/:id', showCtrl.getOneEps);
                    //********add episode to anime ***********\\
    app.put('/anime_name', showCtrl.updateEpisodes);

                //***********\episode routes/ *********************\\
                // note*/ add episodes to all routes;
                /*          general episode add       */
    app.post('/add/new_episode', episodeCtrl.addEpisode);
                /*          get all episodes          */
    app.get('/view/all_episode/:id', episodeCtrl.getAllEpisodesForOneAnime);

    app.get('/episodes/get/one/:id', episodeCtrl.getEpisode)
               /*   delet all episodes  for one anime */
    app.delete('/delete/all/ep/:id', episodeCtrl.deleteAllEpisodes);

    app.get('/episodes/get/episode/:id', episodeCtrl.getEpisodeById);
    app.delete('/episodes/delete/one/:id', episodeCtrl.deleteEpById);    

    // test 
    app.get('/episodes/all', episodeCtrl.getAll);
    app.get('/show/search/:title', showCtrl.getAllRes)
    app.get('/all_anime', showCtrl.getAll)
    app.delete('/eps', episodeCtrl.deleteEps);
    app.put('/update/anime/img/:id', showCtrl.updateAnimeInfo)
};
