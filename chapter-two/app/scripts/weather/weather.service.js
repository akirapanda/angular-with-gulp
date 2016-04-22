(function(){
    'use strict';

    angular
        .module('app.weather')
        .factory('WeatherService', WeatherService);

    WeatherService.$inject = ['$http'];
    function WeatherService($http) {
        return {
            getWeather:function(){
                return $http
                    .post("https://api.heweather.com/x3/weather?cityid=CN101020100&key=1a55be36d6a342f58ee28f903bd2afcb")
                    .then(function(response) {
                        
                        return response.data;
                    });
           }

        };
    }
})();