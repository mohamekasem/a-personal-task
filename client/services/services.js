angular.module('ShadowAnime.services', [])

.factory('services', function ($http, $location, $window) {
	
	function getAnimeList () {
	  return $http({
		method: 'GET',
		url: '/list_anime'
		})
		.then(function (res) {
			console.log(res.data[0].title);
		  return res.data;
		});
	}

	function getAnimeEpisodes(id){
		return $http({
			method: 'GET',
			url: '/info/',
			paramse: id
		})
	}

	return {getAnimeList: getAnimeList};
});