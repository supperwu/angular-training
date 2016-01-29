angular.module('myApp', [])
  .controller('MainController', function() {
    this.name = "Ari";
  })
  .directive('myDirective', function() {
    return {
      restrict: 'A',
      template: '<h4>{{ myController.msg }}</h4>',
      controllerAs: 'myController',
      controller: function() {
        this.msg = "Hello World"
      }
    };
  });
