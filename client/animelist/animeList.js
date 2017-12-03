angular.module('ShadowAnime.animeList', [])

.controller('anListCtrl', function($rootScope, $scope, services,$window) {
	$scope.list = {};
	var vm = this;
	vm.getAnimeInfo = getAnimeInfo;
	vm.getAnimeList = getAnimeList;
	$rootScope.amineInfo = {};
    function getAnimeList () {
		services.getAnimeList()
		 .then(function (data) {
			$scope.list = data;
		 })
		 .catch(function(error) {
			console.error(error);
		 });
	};

	function getAnimeInfo (id){
		console.log(id)
		 services.getAnimeInfo(id)
		  .then(function(info){
			 $rootScope.amineInfo = info;
			 console.log($rootScope.amineInfo)

		  })
		  .catch(function(error) {
		 	console.error(error);
		  });
	}
});
