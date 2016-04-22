(function ()
{
    'use strict';

    angular
        .module('app')
      	.config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider)
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