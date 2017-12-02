angular.module('ShadowAnime', [
	'ShadowAnime.animeList',
	'ShadowAnime.movie',
	'ShadowAnime.support',
	'ShadowAnime.privacy',
	'ShadowAnime.dmca',
	'ShadowAnime.episode',
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
	.when('/zengo', {
		templateUrl: 'episode/episode.html',
		controller: 'episodeCtrl'
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

})
