//define([], function() { 
  //"use strict";

  var spotifyModule = angular.module('spotifyModule', []);

  spotifyModule.config(['$sceDelegateProvider', function($sceDelegateProvider) {
         $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://p.scdn.co/**']);

  }]);

  spotifyModule.controller('HomeController', ['$scope', '$http', '$cacheFactory', function MyController($scope, $http, $cacheFactory) {

    var clicked;
    var limit;
    var query;
    var offset;
    var cache = $cacheFactory.get('$http');
    results = [];



    $scope.more = function() {
      query = sessionStorage.getItem("search");
      get(query);
    };


    // $scope.splitName = function(name) {
    //   var res = name.replace("(", "\n" + "(");
    //   return res;
    // }

    $scope.subString = function(name) {
      if (name.length > 75) {
        return name.substring(0, 75);
      } else {
        return name;
      }
    }

    $scope.search = function(query) {
      sessionStorage.setItem("clicked", 0);
      sessionStorage.setItem("search", query);
      var url = 'https://api.spotify.com/v1/search?q=' + sessionStorage.getItem("search") + '&type=album,artist&limit=50' + '&offset=' + sessionStorage.getItem("clicked");
      var usersCache = cache.get(url);
      if (usersCache) {
        console.log("We found a cache!");
        console.log(usersCache);
      }
      get(query);
    };

    function get(query) {
      // if user click on search button
      if (sessionStorage.getItem("clicked")==0) {
        offset = 0;
        results = [];
      } else {
        offset = parseInt(sessionStorage.getItem("clicked"), 10);
      }

      var path = 'https://api.spotify.com/v1/search?q=' + query + '&type=album,artist&limit=50' + '&offset=' + offset;
      console.log(path);

      $http.get(path, {cache:true}).success(function(data) {
        console.log(data);
        results.push(data);
        console.log(results);
        // $scope.result = data;
        $scope.result = results;
        if (data.albums.total == 0) {
          $scope.empty = true;
          $scope.albums = false;
        } else {
          $scope.empty = false;
          $scope.albums = true;
        }

        if (offset == 0) {
        sessionStorage.setItem("clicked", 50);
          if (data.albums.total < 50) {
            $("#showmore").prop("disabled",true);
            $("#showmore").css("background-color","gray");
            $("#showmore").css("cursor","default");
            console.log("Disable Button From Http");
          } else {
            $("#showmore").prop("disabled",false);
            $("#showmore").css("background-color","#d05d84");
            $("#showmore").css("cursor","pointer");
            console.log("Enable Button From Http");
          }
        } else {
        // sessionStorage.setItem("clicked", offset);
        offset = parseInt(sessionStorage.getItem("clicked"), 10) + 50;
        sessionStorage.setItem("clicked", offset);
          if (offset > $scope.result[0].albums.total) {
            $("#showmore").prop("disabled",true);
            $("#showmore").css("background-color","gray");
            $("#showmore").css("cursor","default");
            console.log("Disable Button");
            console.log(offset);
          } else {
            $("#showmore").prop("disabled",false);
            $("#showmore").css("background-color","#d05d84");
            $("#showmore").css("cursor","pointer");
            console.log("Enable Button"); 
            console.log(offset);
          }
      }      
        
        console.log("Total albums: " + data.albums.total);
      });
    }


    $scope.showAlbum = function(albumId,albumImage,album) {
        $scope.image = albumImage;
        $scope.album = album;
        $scope.data = {};
        console.log("AlbumId: " + albumId);
        var path = 'https://api.spotify.com/v1/albums/' + albumId;
        $http.get(path).success(function(data) {
        var items = data.tracks.items;
        var songs = [];
        for (item in items) {
          songs.push({name:items[item].name,url:items[item].preview_url});
        }
        $scope.data = songs;
        });
      };

      
      // clear album content on modal close
      // $(".fancybox-close-small").click(function(){
      //   alert("Clicked");
        
      // });

  }]);

//});