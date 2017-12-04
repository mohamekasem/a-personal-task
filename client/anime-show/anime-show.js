angular.module('ShadowAnime.anime-show', [])

.controller('animeShowCtrl', function($scope, services, $window){
   var vm = this;
   var tempId = '';
     $scope.info;
     if($window.localStorage.getItem('id')){
      tempId = $window.localStorage.getItem('id');
      services.sharedService.getAnimeInfo(tempId)
    }
    //  $scope.info = services.sharedService.info;
      $scope.$on('handeleAnimeInfo', function(event, args){
       $scope.info = args.data;
      });
});