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
