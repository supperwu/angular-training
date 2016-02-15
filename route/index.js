angular.module('myApp', []).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
