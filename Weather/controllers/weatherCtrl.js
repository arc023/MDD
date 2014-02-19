/*
OKAY SO APPArENtLY I CAN'T PUT MY CONTROLLER INTO A DIFFERENT FILE WITHOUT BREAKING EVERTHING. SO NVM.

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
});*/