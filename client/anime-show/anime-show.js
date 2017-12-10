(function(){
    'use strict';
    angular
      .module('ShadowAnime.anime-show', [])
      .controller('animeShowCtrl', animeShowCtrl);

  function animeShowCtrl ($scope, services, $window, $location) {
    var vm = this;
    var tempId = '';
    $scope.info;
    if ($window.localStorage.getItem('id')) {
      tempId = $window.localStorage.getItem('id');
      services.sharedService.getAnimeInfo(tempId)
    };
    $scope.$on('handeleAnimeInfo', function (event, args) {
      $scope.info = args.data;
    });
    services.getAllEpisodesForOneAnime($window.localStorage.getItem('id'));
  };

})();