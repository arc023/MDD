var weather1 = angular.module('weather1' ['']);

 var urlBase = 'http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json';

weather1.controller('weatherController', function($http){
	var app = this;
	$http.get('http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json').success(function(data) {
		//app.people = data;
		
		console.log = ('hello');
		
  }).error(function(data) {
 
  });

	
	});

  /*
 
var weather1 = angular.module('weather1', ['weather2'])
	weather1.controller('WeatherController', ['weatherFinder', function(weatherFinder){
		
		weather1.factory('Data', function(){
			return (message: 'data')
		})
		
		function weatherController($scope, weatherController){
		$scope.data = weatherController;
		}
		<!--this.total = function total(){
		return weatherFinder.convert(this.zip);
		};
	

		}]);*/