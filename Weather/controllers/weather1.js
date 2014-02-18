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
  
  //not working, I broke it. Fix later
weather1.controller('WeatherController', function($http, $scope){
	var targetzip = $scope.zipcode;
	var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/';
	var call = '.json?callback=JSON_CALLBACK';
	var request = urlBase.concat(targetzip,call);
	
	$http.jsonp('request').success(function(data) {
		$scope.weather = data.current_observation;
		
		console.log($scope.weather);
		console.log('success');
		
  }).error(function(data) {
	  
 		console.log('fail');
});
});

/*  
  weather1.controller('inputController', function ($scope, data){
	  $scope.data = data;
	  
	  });
  */

 