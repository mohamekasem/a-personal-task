(function(){
		angular
			.module('ShadowAnime.animeList', [])
			.controller('anListCtrl', anListCtrl);

	function anListCtrl ($rootScope, $scope, services,$window, $location) {
		$scope.list = {};
		var vm = this;
		vm.search = search;
		vm.title = "";
		vm.getAnimeList = getAnimeList;
		vm.getAnimeInfo = getAnimeInfo;
		vm.type = "TV";
		vm.type2 = "Movie";
		$rootScope.animeInfo = {};
	
			function getAnimeList () {
			if($location.path() === "/animelist"){
				services.getAnimeList(vm.type)
			 .then(function (data) {
				$scope.list = data;
			 })
			 .catch(function(error) {
				console.error(error);
			 });
			}else {
			services.getAnimeList(vm.type2)
			 .then(function (data) {
				$scope.list = data;
			 })
			 .catch(function(error) {
				console.error(error);
			 });
			}
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
	
			 function search(title){
				services.getAllRes(title)
				.then(function(show){
					if(show.length === 0){
						$location.path('/not-found-404')
					}else{
					$rootScope.animeInfo = show;
					$scope.list = show;
					// $location.path(show.title);	
	
					}
				})
				 .catch(function(error) {
					console.error(error);
				 });
			 }
		
			 vm.getAnimeList();
			 $window.localStorage.removeItem('id');
			 $window.localStorage.removeItem('epId');
			 
	};
		
})();

