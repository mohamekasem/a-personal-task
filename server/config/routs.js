let showCtrl = require('../db/show/showController');
let episodeCtrl = require('../db/episode/episodeController');

module.exports = function(app, express) {
    app.get('/', showCtrl.getAllShows);
    };
    