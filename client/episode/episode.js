angular.module('ShadowAnime.episode', [])

.controller('episodeCtrl', function($scope, services, $window, $sce){
    $scope.episode = null;
    var vm = this;
    var anime_id = '';
    vm.catchUrl = catchUrl;
    vm.getAnimeEpisodes = getAnimeEpisodes;
    vm.getEpisode = getEpisode;
    vm.catchNewEps = catchNewEps;

    function catchUrl (url){
        $scope.url = url
    }
    
    function getEpisode(){
        anime_id = $window.localStorage.getItem('id');
        services.getEpisode(anime_id)
          .then(function(data){
            $scope.episode = data;
            vm.catchUrl($scope.episode.servers[0].url);


        })
          .catch(function(err){
            console.error(err);
        });
    }

    function getAnimeEpisodes(){
         anime_id = $window.localStorage.getItem('id');
        services.getAllEpisodesForOneAnime(anime_id)
        .then(function(data){
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            // if($scope.episode.ep === data[0].ep){
                $scope.episode = data[0];

                vm.catchUrl($scope.episode.servers[0].url);
                $scope.episodes = data;  
            // }
        })
          .catch(function(err){
            console.error(err);
        });
    }

    function catchNewEps (obj){
        $scope.episode = obj;
        vm.catchUrl($scope.episode.servers[0].url);
    }

    if($scope.url){
        vm.catchUrl();
    }
});

