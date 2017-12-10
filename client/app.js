(function(){
	angular.module('ShadowAnime', [
		'ShadowAnime.home',
		'ShadowAnime.animeList',
		'ShadowAnime.episode',
		'ShadowAnime.anime-show',
		'ShadowAnime.services',
		'ShadowAnime.admin',
		'ngRoute'
		])
		.config(config);
		
	function config($routeProvider, $httpProvider, $locationProvider, $sceDelegateProvider) {
		$routeProvider
			
		.when('/animelist', {
			templateUrl: 'animelist/animeList.html',
			controller: 'anListCtrl',
			controllerAs: 'A'
		})
		.when('/admin', {
			templateUrl: 'admin/admin.html',
			controller: 'adminct',
			controllerAs: 'Admin'
		})
		.when('/animelist/info/:id', {
			templateUrl: 'anime-show/anime-show.html',
			controller: 'animeShowCtrl',
			controllerAs: 'A-Show'
		})
		.when('/episodes/:id/episode', {
			templateUrl: 'episode/episode.html',
			controller: 'episodeCtrl',
			controllerAs: 'Ep'
		})
		.when('/movie', {
			templateUrl: 'animelist/animeList.html',
			controller: 'anListCtrl',
			controllerAs: 'A'
		})
		.when('/support', {
			templateUrl: 'support/support.html',
		})
		.when('/privacy', {
			templateUrl: 'privacy/privacy.html'
		})
		.when('/dmca', {
			templateUrl: 'dmca/dmca.html'
		})
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl',
			controllerAs: 'Home'
		})
		.when('/not-found-404', {
			templateUrl: '404/404.html',
		})
		.when('/ep/id/comming-soon', {
			templateUrl: 'soon/soon.html',		
		})
	
		.otherwise({redirectTo: "/"});
		
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'*://www.youtube.com/**',
			'*:https://mp4upload.com/**'
			])
	}
	
})();

