let showCtrl = require('../db/show/showController');
let episodeCtrl = require('../db/episode/episodeController');

module.exports = function(app, express) {
    app.get('/list_anime', showCtrl.getAllShows);
    app.get('/list_anime/:id', showCtrl.getOneAnime);
    // note this part in not complite need more work
    add.get('/anime_online/:title')
    app.post('/add/anime_show', showCtrl.postNewShow);

};
