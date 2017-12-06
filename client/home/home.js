angular.module('ShadowAnime.home', [])

.controller('homeCtrl', function($scope, services,$window) {
    var vm = this;
    vm.getAll = getAll;
    vm.catchId = catchId;
    vm.episodes = null;
    vm.id = "";

    function getAll (){
        services.getAll()
          .then(function(all){
                vm.episodes = all;
            })
    }
    
    function catchId(id, epId){
        console.log(epId)
        $window.localStorage.setItem('id', id);
        $window.localStorage.setItem('epId', id);
         vm.id = id;
    }
});

