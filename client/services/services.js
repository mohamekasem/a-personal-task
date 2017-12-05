angular.module('ShadowAnime.services', [])

.factory('services', function ($http, $location, $window, $rootScope) {
	
	function getAnimeList () {
	  return $http({
		method: 'GET',
		url: '/list_anime'
		})
		.then(function (res) {
		  return res.data;
		});
	}

	var sharedService = {
		getAnimeInfo: function(id){
			var vm = this;
			return $http({
				method: 'GET',
				url: '/anime/info/' +id,
			 })
			 .then(function(res){
				return res.data;
			 })
			 .then(function(data){
				vm.broadcastItem(data)
				this.info = data;
		 	})	
	 	},

 	 	broadcastItem : function(data){
 	    $rootScope.$broadcast('handeleAnimeInfo',{data: data});
 	  }
	}

	function getAllEpisodesForOneAnime (id){
		return $http({
			method: "GET",
			url: "/view/all_episode/" + id
		})
		.then(function(res){
			return res.data
		})
	}

	function getEpisode (id){
		return $http({
			method: "GET",
			url: "/episodes/get/one/" +id,
		})
		.then(function(res){
			return res.data;
		})
	}

	return {
		getAnimeList: getAnimeList,
		sharedService: sharedService,
		 getAllEpisodesForOneAnime: getAllEpisodesForOneAnime,
		 getEpisode: getEpisode
	};
});