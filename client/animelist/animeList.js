angular.module('ShadowAnime.animeList', [])

.controller('anListCtrl', function($scope, services,$window) {
	
    $scope.getAnimeList = function () {
		services.getAnimeList(animeList).then(function (data) {
			
		})
		.catch(function(error) {
			console.error(error);
		});
	};
});
