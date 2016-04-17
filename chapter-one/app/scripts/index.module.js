(function ()
{
    'use strict';

    angular
        .module('app', [
        	'ui.router'
        ])
      	.config(routeConfig);;

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {

    	$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'home.html',
					controller: 'IndexController',
					controllerAs: 'vm'
				});
    }
})();