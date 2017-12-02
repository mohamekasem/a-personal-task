angular.module('ShadowAnime.episode', [])

.controller('episodeCtrl', function($scope, services){
    $scope.episodes = null;
    $scope.getAnimeEpisodes = function(id){
        services.getAnimeEpisodes(id)
        .then(function(data){
            $scope.episodes = data;
        })
        .catch(function(err){
        console.error(err);
        });
    }
});