var morgan = require('morgan');
var bodyParser = require('body-parser');
// let helmet = require('helmet');

module.exports = function(app, express) {
//  app.use(helmet());
 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../../client'));
};

