(function(){
  angular
    .module('ShadowAnime.home', [])
		.controller('homeCtrl', homeCtrl);
		
	function homeCtrl($scope, services,$window) {
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
      $window.localStorage.setItem('id', id);
      $window.localStorage.setItem('epId', id);
      vm.id = id;
    }
	};
		
})();

