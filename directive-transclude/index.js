angular.module('myApp', [])
  .directive('sidebox', function() {
    return {
      restrict: 'EA',
      scope: {
        title: '@'
      },
      transclude: true,
      template: '<div class="sidebox">' +
        '<span class="content" ng-transclude>' +
        '</div>'
    };
  });
