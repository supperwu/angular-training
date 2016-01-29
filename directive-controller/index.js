angular.module('myApp', [])
  .directive('myDirective', function() {
    return {
      restrict: 'A',
      template: 'Inside myDirective, isolate scope: {{ myProperty }}',
      scope: {},
      controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs, $transclude) {
        console.log($scope.myProperty);
        console.log($scope.__proto__);
      }]
    };
  })
  .directive('myInheritScopeDirective', function() {
    return {
      restrict: 'A',
      template: 'Inside myDirective, isolate scope: {{ myProperty }}',
      scope: true,
      controller: ['$scope', function($scope, $element, $attrs, $transclude) {
        console.log($scope.myProperty);
        console.log($scope.__proto__);
      }]
    };
  });
