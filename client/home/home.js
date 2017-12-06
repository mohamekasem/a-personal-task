angular.module('ShadowAnime.home', [])

.controller('homeCtrl', function($scope, services,$window) {
    var vm = this;
    vm.getAll = getAll;
    vm.catchId = catchId;
    vm.getEpisode = getEpisode;
    vm.episodes = null;
    vm.id = "";

    function getAll (){
        services.getAll()
          .then(function(all){
                vm.episodes = all;
            })
        }
    function getEpisode (id){

    }

    function catchId(id){
        $window.localStorage.setItem('id', id);
         vm.id = id;
    }
});

