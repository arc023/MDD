var weather1 = angular.module('weather1', ['ngRoute']);
weather1.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/show',{
			templateUrl:'templates/showWeather.html',
			controller: 'WeatherController'})
		.when('/default',{
			templateUrl:'templates/inputZip.html',
			})

		.otherwise({
			redirectTo: '/default'
		});
}]);
  
  
weather1.controller('WeatherController', function($http, $scope){
	var targetzip = $scope.zipcode.values;
	var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/';
	var call = '.json?callback=JSON_CALLBACK';
	var request = urlBase.concat(targetzip,call);
	
	
	console.log(targetzip);
	
	
	$http.jsonp('http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json?callback=JSON_CALLBACK').success(function(data) {
		$scope.weather = data.current_observation;
	
		
		
		
  }).error(function(data) {
	  
 		console.log('fail');
});
});



 