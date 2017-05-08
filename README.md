# Spotify API with AngularJS

The application makes use of the endpoint bellow, to retrieve information about artists and albums. 
https://api.spotify.com/v1/search?q=Hillsong&type=album,artist&limit=50&ffset=0

The app make a combined use of the limit and offset params to navigate throught results.
The application also gets a sample of every single track of an album from SpotifyAPI.


## Project Description


# Gulp

The project have the following dependencies for development:

	gulp
	jshint
	sass 
	sourcemaps 
	webserver 
	concat 

The project also makes use of AngularJS, Jquery and FancyBox.


# AngularJS

The AngularJS makes use of the $http cache for loading content faster and of the directive ng-include for separation of concerns.

All results are pushed into an array so we can get access to all the result sets and loop through all results available. Each new call can be added to the previous results, making possible to loop through all calls.

We make use of the sessionStorage.getItem("clicked") and sessionStorage.getItem("search") to keep track of the offset and the search query through the application.

All http calls are handled by the get(query) function.

# SASS

The sass files are processed and minified into a single css file. Source maps were kept for debuggin purposes. 

Sass files are separated into modules/partials and all files are imported into the styles.scss: 

	variables
	reset
	mixins
	base
	search
	modules/results
	modules/album
	
# Unit Testing

For Unit Testing we are making use of the ngMock and Jasmine framework. 

The test can be executed directly in the browser by going to the jasmine-standalone-2.3.4/SpecRunner.html file which tests the http call. The service.spec.js use the ngMock $httpBackend service to fake a call to a http service in the service.js source file. 
	
	$httpBackend.when('GET', 'https://api.spotify.com/v1/search?q=hillsong&type=album,artist&limit=10&offset=0')
    	.respond(200, jsonData);
	
The service.js returns a promise object to the service caller which can make use of the "then" function of the promise object in the call chain.

## Search method from spotifyApi service

	search: function(query) {
		var deferred = $q.defer();
		var path = 'https://api.spotify.com/v1/search?q=' + query + '&type=album,artist&limit=10&offset=0';
		$http.get(path).success(function(data) {
		deferred.resolve(data);
		});
		return deferred.promise;
	}
	
## Calling the search method from spotifyApi service

	spotifyApi.search("hillsong").then(function(data) {
		response = data;
	});
	

