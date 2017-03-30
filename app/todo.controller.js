(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = [];

    /* @ngInject */
    function ToDoController() {
        var vm = this;
        vm.sortField = "name"
        vm.items = [];
        vm.priorities = [{
            name: 'High',
            number: 3
        }, {
            name: "Med",
            number: 2
        }, {
            name: 'Low',
            number: 1
        }]
// Creates a function to the button to 'addtodo' button
vm.addItem = function() {
// Adding the user input into the array
  vm.items.push(vm.add)
  vm.add = '';
}
    }
})();
