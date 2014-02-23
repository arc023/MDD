var weather1 = angular.module('weather1', ['ngRoute']);
  
  /* routing configs */

weather1.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/show',{
			templateUrl:'templates/showWeather.html',
			controller: 'WeatherController'})
		.when('/default',{
			templateUrl:'templates/inputZip.html',
			controller: 'WeatherController'})
		.when('/about',{
			templateUrl:'templates/about.html',
			})

		.otherwise({
			redirectTo: '/default'
		});
}]);
  
  /* cntrls */
  
weather1.controller('WeatherController', function($http, $scope, $location){
	$scope.list = [];
	$scope.zipcode = '';
	
	$scope.submit = function(){
		var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/';
	var call = '.json?callback=JSON_CALLBACK';
	var request = urlBase.concat($scope.zipcode,call);
		
//		console.log($scope.zipcode);
		if($scope.zipcode){
			$scope.list.push(this.zipcode);
			$scope.zipcode='';
			$location.path('/show');
			}
//		console.log(request);
			$http.jsonp(request).success(function(data) {
		$scope.weather = data.current_observation;
	console.log($scope.weather);
		
  }).error(function(data) {
	  
 		console.log('fail');
});
		
	};
	


	
	
});

//Error Checking - works kinda
/*
function validateForm()
{
var x=inputZip.html["myForm"]["zipcode"].value;
if (x==null || x=="")
  {
  alert("You must enter a zipcode");
  return false;
  }
};

 */