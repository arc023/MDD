var weather1 = angular.module('weather1', []);

var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json';

weather1.controller('WeatherController', function($http, $scope){
	
	$http.jsonp('http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json?callback=JSON_CALLBACK').success(function(data) {
		$scope.weather = data.current_observation;
		
		console.log($scope.weather);
		console.log('success');
		
  }).error(function(data) {
	  
 		console.log('fail');
  });
});

 