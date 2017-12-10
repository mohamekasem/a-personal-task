(function(){
  'use strict';
    angular
      .module("ShadowAnime.admin", [])
      .controller("adminct", admin);

  // admin.$inject = ['$scope', 'services', '$location'];
  
  function admin($scope, services, $location){
    var vm = this;
    vm.allEp;
    vm.getAllEpForAllAnime = getAllEpForAllAnime;

    function getAllEpForAllAnime(){
      services.getAll()
          .then(function(AllEp){
            console.log(allEp);
            vm.allEp = allEp;
          })
          .catch(function(err){
            console.error(err);
          })

    }
  }
})();