angular.module('ShadowAnime.services', [])

.factory('services', function ($http, $location, $window) {
	
	function getAnimeList () {
	  return $http({
		method: 'GET',
		url: '/list_anime'
		})
		.then(function (res) {
		  return res.data;
		});
	}

	// function getAnimeEpisodes(id){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/info/',
	// 		paramse: id
	// 	})
	// }
	
	function getAnimeInfo(id){
		return $http({
			method: 'GET',
			url: '/list_anime/' + id
		})
		.then(function(res){
			return res.data;
		})
	}

	return {
		getAnimeList: getAnimeList,
		getAnimeInfo: getAnimeInfo
	};
});