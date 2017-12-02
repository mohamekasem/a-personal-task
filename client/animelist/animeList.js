angular.module('ShadowAnime.animeList', [])

.controller('anListCtrl', function($scope, services,$window) {
	$scope.list = {}
    $scope.getAnimeList = function () {
		services.getAnimeList().then(function (data) {
			$scope.list = data;
		})
		.catch(function(error) {
			console.error(error);
		});
	};
});
