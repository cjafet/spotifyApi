  var spotify = angular.module('spotify', []);

  spotify.factory('spotifyApi', ['$rootScope','$http','$q', function($rootScope,$http,$q){
    return {
    // spotify.factory('spotifyApi', function($http, $q) {
      
      // create service object
      // var service = {};

      // add search method to service object
      // service.search = function(query) {
      search: function(query) {
        var deferred = $q.defer();
        var path = 'https://api.spotify.com/v1/search?q=' + query + '&type=album,artist&limit=10&offset=0';
        $http.get(path).success(function(data) {
          deferred.resolve(data);
        });
          return deferred.promise;
      }

      // return service;
    };
  }]);