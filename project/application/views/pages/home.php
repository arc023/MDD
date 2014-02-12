<h1>Weather app testing webpage</h1>
<p>Note: Currently on US zip codes will work for the following code. Please don't enter international addresses.
</p>
<p>
More notes: API needs fixed. Footer in smaller sizes needs fixed. Should probably stick the orange color somewhere. 
</p>

<p>Finished page should have the following things:
Zip code input which shows city, state, time, current weather forecast after click</p>
<!--
http://weather.yahooapis.com/forecastrss?z=99114=f
-->
<!-- API EXAMPLE -->

<!--okay I cannot figure out how to make an $http request work. If someone readying this can help me get my code fixed I would greatly appreciate it. 

AIM is arc023@fullsail.edu -->

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
