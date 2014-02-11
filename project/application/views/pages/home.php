<h1>Testing things - like API</h1>
<p>Note: Currently on US zip codes will work for the following code. Please don't enter international addresses.</p>


<!--
http://weather.yahooapis.com/forecastrss?z=99114=f
-->
<!-- API EXAMPLE -->

<div ng-app="weather1">
<div ng-controller="WeatherController as app">
		
        {{app}}
	
	</div>
		
	

</div>
<!--<div ng-app="weather1">
<div ng-controller="WeatherController as weather">
	<b>Local Weather</b>
	
	<div>
	Zip code: <input type='text' name: zip ng-model="weather.zip" onkeypress="return event.charCode > 47 && event.charCode < 58;" pattern="[0-9]{5}" required>
	</div>

	
	<b>It is currently: </b>
	<span>
		
	</span>
	  
    </div>
-->	
