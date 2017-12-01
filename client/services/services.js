angular.module('ShadowAnime.services', [])

.factory('services', function ($http, $location, $window) {
	
	function getAnimeList () {
	  return $http({
		method: 'GET',
		url: '/api/list_anime'
		})
		.then(function (resb) {
		  return resb.data;
		});
	}

	return {getAnimeList: getAnimeList};
});