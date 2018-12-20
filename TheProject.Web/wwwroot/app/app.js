(function () {
    'use strict';

    var app = angular.module('TheApp', ['ngRoute', 'ngStorage','angular-loading-bar']);
    //154.0.170.81:89
    app.constant('projectApi', 'http://localhost:63786/api');
   // app.constant('projectApi', 'http://41.76.213.126:82/api');

    app.run(function ($rootScope, $location, $sessionStorage, $timeout) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.currentUrl = $location.path();
        });
    });
})();