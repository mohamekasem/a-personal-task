// angular.module('ShadowAnime.services', [])

// .factory('services', function ($http, $location, $rootScope) {
// 	// this.sharedService
// 	var sharedService = {};
// 	    sharedService.info = {};
// 	    sharedService.broadcastItem = function(){
// 	    	$rootScope.$broadcast('handeleAnimeInfo');
// 	  }

// 	function getAnimeList () {
// 	  return $http({
// 		method: 'GET',
// 		url: '/list_anime'
// 		})
// 		.then(function (res) {
// 		  return res.data;
// 		});
// 	}

// 	// function getAnimeEpisodes(id){
// 	// 	return $http({
// 	// 		method: 'GET',
// 	// 		url: '/info/',
// 	// 		paramse: id
// 	// 	})
// 	// }
	
// 	sharedgetAnimeInfo = function(title){
// 		var vm = this;
// 		return $http({
// 			method: 'GET',
// 			url: '/anime/info/',
// 			data: title
// 		})
// 		.then(function(res){
// 			vm.broadcastItem();
// 			console.log(res, 'in serv');
// 			return sharedService.info = res.data;
// 		})
// 	}

// 	return {
// 		sharedService:sharedService,
// 		getAnimeList: getAnimeList,
// 		// getAnimeInfo: getAnimeInfo
// 	};
// });

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

	return {
		getAnimeList: getAnimeList,
		sharedService: sharedService
		// getAnimeInfo: getAnimeInfo
	};
});