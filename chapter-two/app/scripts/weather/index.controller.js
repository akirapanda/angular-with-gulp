(function ()
{
    'use strict';

    angular
        .module('app.weather')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['WeatherService'];
    function IndexController(WeatherService)
    {
        var vm = this;
        vm.city = "";
        vm.temp = "";
        vm.showWeather = showWeather;

        function showWeather(){

            WeatherService.getWeather().then(function(data){
                vm.city = data["HeWeather data service 3.0"][0].basic.city;
                vm.temp = data["HeWeather data service 3.0"][0].now.tmp;
            });
        }
    }

})();
