(function () {
    'use strict';

    function indexController($location, $scope, $rootScope, $sessionStorage, $window) {
        $scope.isLoggedin = $sessionStorage.isUserAuthenticated;
        $scope.navigateTo = function (url) {
            $location.path(url);
        }


        $rootScope.$on('$locationChangeSuccess', routeChanged);
        function routeChanged(evt, newUrl, oldUrl) {
            if ($location.path() == '/index' || $location.path() == '/') {
                $location.path('/dashboard');
            }
            if (!$sessionStorage.isUserAuthenticated) {
                $location.path('/login');
            }    

            if ($sessionStorage.userType == 'Admin') {
                $scope.isAdmin = true;
            } else {
                $scope.isAdmin = false;
            }
           
        }

        $scope.logout = function () {
            $window.location.reload();
            $sessionStorage.isUserAuthenticated = false;     
            $sessionStorage.userType = "";
            $location.path('/login');
        }
    }

    angular.module('TheApp').controller('indexController', indexController);
    indexController.$inject = ['$location', '$scope', '$rootScope', '$sessionStorage', '$window'];
})();