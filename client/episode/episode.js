(function(){
		angular
			.module('ShadowAnime.episode', [])
			.controller('episodeCtrl', episodeCtrl);

function episodeCtrl($scope, services, $window, $sce, $location){
  $scope.episode = null;
  var vm = this;
  var anime_id = '';
  vm.catchUrl = catchUrl;
  vm.getAnimeEpisodes = getAnimeEpisodes;
  vm.getEpisode = getEpisode;
  vm.catchNewEps = catchNewEps;
  vm.info = {};
    
    function catchUrl (url){
      $scope.url = url
    };
        
    function getEpisode(){
    	anime_id = $window.localStorage.getItem('id');
      services.getEpisode(anime_id)
        .then(function(data){
          console.log(data)
          if(data.lenght <=0){
          	$location.path('/ep/id/comming-soon')
          }
          $scope.episode = data;
          vm.catchUrl($scope.episode.servers[0].url);
        })
        .catch(function(err){
          console.error(err);
        });
    	};
    
      function getAnimeEpisodes(){
        anime_id = $window.localStorage.getItem('id');
        services.getAllEpisodesForOneAnime(anime_id)
        	.then(function(data){
            if(data){
              $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
              }
              $scope.episode = data[0];
              vm.catchUrl($scope.episode.servers[0].url);
              $scope.episodes = data;  
              services.sharedService.getAnimeInfo(anime_id)
                .then(function(animeInfo){
                  vm.info = animeInfo;
                })
                .catch(function(err){
                  console.error(err);
                })
            }else{
              $location.path('/ep/id/comming-soon')
            }  
          })
          .catch(function(err){
            $location.path('/ep/id/comming-soon')
            console.error(err);
          });
        };
    
      function catchNewEps (obj){
        $scope.episode = obj;
        vm.catchUrl($scope.episode.servers[0].url);
      };
    
      if($scope.url){
        vm.catchUrl();
			};
		};
    
})();

