angular.module('ShadowAnime', [
	'ShadowAnime.animeList',
	'ShadowAnime.movie',
	'ShadowAnime.support',
	'ShadowAnime.privacy',
	'ShadowAnime.dmca',
	'ShadowAnime.services',
	'ngRoute'
	])

.config(function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider
	.when("/", {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	  })
	.when('/animelist', {
		templateUrl: 'animeList/animeList.html',
		controller: 'anListCtrl'
	})
	.when('/movie', {
		templateUrl: 'movie/movie.html',
		controller: 'movieCtrl'
	})
	.when('/support', {
		templateUrl: 'support/support.html',
		controller: 'supportCtrl'
	})
	.when('/privacy', {
		templateUrl: 'privacy/privacy.html',
		controller: 'AppleCtrl'	
	})
	.when('/dmca', {
		templateUrl: 'dmca/dmca.html',
		controller: 'dmca‬‏Ctrl'	
	})

	.otherwise({redirectTo: "/"});

	// $locationProvider.hashPrefix('');
	// $httpProvider.interceptors.push('AttachTokens');
})


// .factory('AttachTokens', function($window) {

// 	var attach = {
// 		request: function(object) {
// 			var jwt = $window.localStorage.getItem('MobileSmart');
// 			if (jwt) {
// 				object.headers['x-access-token'] = jwt;
// 			}
// 			object.headers['Allow-Control-Allow-Origin'] = '*'
// 			return object;
// 		},
// 	};
// 	return attach;

// })
// .run(function($rootScope, $location, serv) {

// 	$rootScope.$on('$routeChangeStart', function(evt, next, current) {
// 		if (next.$$route && next.$$route.authenticate && !serv.isAuth()) {
// 			$location.path('/signin');
// 		}
// 	});
// });