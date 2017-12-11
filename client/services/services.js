(function () {
	angular
		.module('ShadowAnime.services', [])
		.factory('services', services);

	function services($http, $location, $window, $rootScope) {
		var sharedService = {};
		sharedService.getAnimeInfo = getAnimeInfo;
		sharedService.broadcastItem = broadcastItem;

		return {
			getAll: getAll,
			getAllRes: getAllRes,
			getAnimeList: getAnimeList,
			sharedService: sharedService,
			getAllEpisodesForOneAnime: getAllEpisodesForOneAnime,
			getEpisode: getEpisode
			// getEpisodeById: getEpisodeById
		};

		function getAnimeList(type) {
			return $http({
					method: 'GET',
					url: '/show/get/list/' + type
				})
				.then(function (res) {
					return res.data;
				});
		};


		function getAnimeInfo (id) {
				var vm = this;
				return $http({
						method: 'GET',
						url: '/show/get/one/info/' + id,
					})
					.then(function (res) {
						return res.data;
					})
					.then(function (data) {
						vm.broadcastItem(data);
						return this.info = data;
					});
			}

			function broadcastItem (data) {
				$rootScope.$broadcast('handeleAnimeInfo', {
					data: data
				});
			}

		function getAllRes(title) {
			return $http({
					method: "GET",
					url: "/show/search/" + title
				})
				.then(function (res) {
					return res.data;
				});
		};

		function getAll() {
			return $http({
					method: 'GET',
					url: '/episodes/get/all'
				})
				.then(function (res) {
					return res.data;
				});
		};

		function getAllEpisodesForOneAnime(id) {
			return $http({
					method: "GET",
					url: "/episodes/get/all_ep_for_one/" + id
				})
				.then(function (res) {
					return res.data;
				});
		};

		function getEpisode(id) {
			return $http({
					method: "GET",
					url: "/episodes/get/one/" + id,
				})
				.then(function (res) {
					return res.data;
				});
		};
	};

})();