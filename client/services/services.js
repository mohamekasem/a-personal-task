(function(){
	angular
		.module('ShadowAnime.services', [])
		.factory('services', services);

		function services ($http, $location, $window, $rootScope){
			function getAll(){
				return $http({
					method: 'GET',
					url: '/episodes/all'
				})
				.then(function(res){
					return res.data;
				});
			};
		
			function getAnimeList (type) {
				return $http({
				method: 'GET',
				url: '/list_anime/'+ type
				})
				.then(function (res) {
					return res.data;
				});
			};
		
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
						vm.broadcastItem(data);
						return this.info = data;
					 });	
				 },
		
					broadcastItem : function(data){
					 $rootScope.$broadcast('handeleAnimeInfo',{data: data});
				 }
			};
		
			function getAllEpisodesForOneAnime (id){
				return $http({
					method: "GET",
					url: "/view/all_episode/" + id
				})
				.then(function(res){
					return res.data;
				});
			};
		
			function getEpisode (id){
				return $http({
					method: "GET",
					url: "/episodes/get/one/" +id,
				})
				.then(function(res){
					return res.data;
				});
			};
		
			function getAllRes (title){
				return $http({
					method: "GET",
					url: "/show/search/" + title
				})
				.then(function(res){
					return res.data;
				});
			};
		
			function getEpisodeById(id){
				return $http({
					method: "GET",
					url: "/episodes/get/episode/"+ id
				})
				.then(function(res){
					return res.data;
				});
			}
		
			return {
				getAll: getAll,
				getAllRes: getAllRes,
				getAnimeList: getAnimeList,
				sharedService: sharedService,
				getAllEpisodesForOneAnime: getAllEpisodesForOneAnime,
				getEpisode: getEpisode,
				getEpisodeById: getEpisodeById
			};
		};
		
})();
