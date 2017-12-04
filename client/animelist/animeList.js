angular.module('ShadowAnime.animeList', [])

.controller('anListCtrl', function($rootScope, $scope, services,$window) {
	$scope.list = {};
	var vm = this;
	vm.getAnimeList = getAnimeList;
	vm.getAnimeInfo = getAnimeInfo;
	$rootScope.animeInfo = {};
	
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
		$window.localStorage.setItem('id',id);		
		services.sharedService.getAnimeInfo(id)
		 .then(function(info){
			$rootScope.animeInfo = info;
		})
		 .catch(function(error) {
			console.error(error);
		 });
	   }
	
	   vm.getAnimeList();
	   $window.localStorage.removeItem('id');
});


