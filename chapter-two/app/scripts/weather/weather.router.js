(function ()
{
    'use strict';

    angular
        .module('app.weather')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider)
    {

      $stateProvider
        .state('weather', {
          url: '/weather',
          templateUrl: 'scripts/weather/index.html',
          controller: 'IndexController',
          controllerAs: 'vm'
        });
    }


})();