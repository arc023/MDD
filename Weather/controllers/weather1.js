var weather1 = angular.module('weather1', ['ngRoute', 'ui.bootstrap']);
  
  /* routing configs */

weather1.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/default',{
			templateUrl:'templates/welcome.html',
			})
		.when('/about',{
			templateUrl:'templates/about.html',
			})
			.when('/show',{
			templateUrl:'templates/showWeather.html',
			controller: 'WeatherController'})
		.when('/pictures',{
			templateUrl:'templates/inputZip.html',
			controller:'CarouselCtrl'})
		.when('/msg',{
			templateUrl:'templates/msg.html',
			controller: 'alert'})
		.otherwise({
			redirectTo: '/default'
		});
}]);

  
  /* cntrls */
  
weather1.controller('WeatherController', function($http, $scope ){
	
		$http.jsonp('http://api.wunderground.com/api/cf6c8139e5b43574/conditions/q/99114.json?callback=JSON_CALLBACK').success(function(data) {
		$scope.weather = data.current_observation;
	console.log($scope.weather);
	
  }).error(function(data) {
	  
 		console.log('fail');
});
});

//picture controller
weather1.controller('CarouselCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	$scope.slides = [
            {image: 'img/welcome.jpg', description: 'Image 00'},
            {image: 'img/welcome2.jpg', description: 'Image 01'},
            {image: 'img/main.jpg', description: 'Image 02'},
            {image: 'img/tower.jpg', description: 'Image 03'},
            {image: 'img/library.jpg', description: 'Image 04'},
			{image: 'img/park.jpg', description: 'Image 05'},
			{image: 'img/post.jpg', description: 'Image 04'}
        ];
		 var slides = $scope.slides;
	
   }); 

//msg controller
weather1.controller('alert', function ($scope) {
  $scope.model = {};
  $scope.submit = function(){
    alert('Message received! (Except not because the email plugin isn"t connected.)' );
	};

  });

