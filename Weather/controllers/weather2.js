/*var weather2 = angular.module('weather2', []);

var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/';
var zipAdd = zipcode;
var call = '.json?callback=JSON_CALLBACK';
  
  weather2.controller('WeatherController', function($http, $scope){
	
	$http.jsonp('http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json?callback=JSON_CALLBACK').success(function(data) {
		$scope.weather = data.current_observation;
		
		//console.log($scope.weather);
		//console.log('success');
		
  }).error(function(data) {
	  
 		//console.log('fail');
  });
});



angular.module('weather2', [])
 .factory('weatherFinder', ['$http', function($http) {
 
 var YAHOO_WEATHER_URL = "http://weather.yahooapis.com/forecastrss?z=";
 var DEGREE = '=c';
 var ZIP = weather.zip;
 
 return {
 convert:convert
 
 }
 
 this.getZip = function(position, successCallback, FailureCallback){
	
	var endZip = YAHOO_WEATHER_URL + ZIP + DEGREE;
	
		 $http.get(endZip)
			.success(function(data, status, headers, config) {
				successCallback(data);
			})
			.error(function(data, status, headers, config) {
				failureCallback(status);
			});
	 }
 };
 */