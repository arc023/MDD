/*

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