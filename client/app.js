angular.module('ShadowAnime', [
	'ShadowAnime.home',
	'ShadowAnime.animeList',
	'ShadowAnime.movie',
	'ShadowAnime.support',
	'ShadowAnime.privacy',
	'ShadowAnime.dmca',
	'ShadowAnime.episode',
	'ShadowAnime.anime-show',
	'ShadowAnime.services',
	'ngRoute'
	])

.config(function($routeProvider, $httpProvider, $locationProvider, $sceDelegateProvider) {
	$routeProvider
		
	.when("/", {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	  })
	.when('/animelist', {
		templateUrl: 'animeList/animeList.html',
		controller: 'anListCtrl',
		controllerAs: 'A'
	})
	.when('/animelist/info/:id', {
		templateUrl: 'anime-show/anime-show.html',
		controller: 'animeShowCtrl',
		controllerAs: 'A-Show'
	})
	.when('/episodes/:id/episode', {
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
	
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'*://www.youtube.com/**'
	  ])
})
