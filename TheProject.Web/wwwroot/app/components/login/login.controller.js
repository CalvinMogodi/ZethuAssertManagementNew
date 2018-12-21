(function () {
    'use strict';

    function LoginController($location, $scope, $sessionStorage, TheProjectService, $route, $window) {

        $scope.invalidLogin = false;
        $scope.nousername = false;
        $scope.nopassword = false;
        $scope.user = {};
        init();
        function init() {
          
        }

        $scope.navigateTo = function (url) {
            $location.path(url);
        }   

        $scope.login = function (user) {
            $scope.invalidLogin = false;
            $scope.nousername = false;
            $scope.nopassword = false;
            if (user.username == undefined) {
                $scope.nousername = true;
            }
            if (user.password == undefined) {
                $scope.nopassword = true;
            }
            if ($scope.loginForm.$valid) {
                TheProjectService.loginUser(user, function (data) {
                    if (data) {
                        $sessionStorage.isUserAuthenticated = true;
                        $sessionStorage.userType = data.Role;                        
                        $location.path('/dashboard');
                        $window.location.reload();
                    } else {
                        $scope.invalidLogin = true;
                        $sessionStorage.isUserAuthenticated = false;
                    }
                });
            }
        }
    }

    angular.module('TheApp').controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$scope', '$sessionStorage', 'TheProjectService', '$route', '$window'];
})();