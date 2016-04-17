(function ()
{
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    function IndexController()
    {
        var vm = this;
        vm.name = "User";
        vm.changeName = changeName;

        function changeName(){
        	vm.name = "New Name";
        }
    }

})();
