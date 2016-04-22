(function ()
{
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    function IndexController()
    {
        var vm = this;
        vm.name = "unknown";
        vm.changeName = changeName;

        function changeName(){
        	vm.name = "New Name";
        }
    }

})();
