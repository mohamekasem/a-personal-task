let showCtrl = require('../db/show/showController');
let episodeCtrl = require('../db/episode/episodeController');

module.exports = function(app, express) {
                    /*\\\\\\\\\\\get all anime////////////*/

    app.get('/list_anime', showCtrl.getAllShows);
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
                /*          general episode add       */
    app.post('/add/new_episode', episodeCtrl.addEpisode);
                /*          get all episodes          */
    app.get('/view/all_episode', episodeCtrl.getAllEpisodes);
};
