﻿(function () {
    'use strict';
    var routeProvider = function ($routeProvider, $locationProvider) {

        var viewBase = '../app/components';
        $routeProvider.when('/addFacility', {
            controller: 'AddFacilityController',
            templateUrl: viewBase + '/facility/add.facility.html',
        }).when('/viewFacilities', {
            controller: 'ViewFacilitiesController',
            templateUrl: viewBase + '/facility/view.facilities.html',
        }).when('/viewPortfolios', {
                controller: 'ViewPortfoliosController',
                templateUrl: viewBase + '/portfolio/view.portfolio.html',
         }).when('/addPortfolio', {
                controller: 'AddPortfolioController',
                templateUrl: viewBase + '/portfolio/add.portfolio.html',
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: viewBase + '/login/login.html',
            }).when('/viewBuildings', {
                controller: 'ViewBuildingsController',
                templateUrl: viewBase + '/building/view.buildings.html',
            }).when('/addBuilding', {
                controller: 'AddBuildingController',
                templateUrl: viewBase + '/building/add.building.html',
            }).when('/addUser', {
                controller: 'AddUserController',
                templateUrl: viewBase + '/user/add.user.html',
            }).when('/viewUsers', {
                controller: 'ViewUsersController',
                templateUrl: viewBase + '/user/view.users.html',
            }).when('/addClient', {
                controller: 'AddClientController',
                templateUrl: viewBase + '/client/add.client.html',
            }).when('/viewClients', {
                controller: 'ViewClientsController',
                templateUrl: viewBase + '/client/view.clients.html',
            })
            .when('/dashboard', {
                controller: 'DashboardController',
                templateUrl: viewBase + '/dashboard/dashboard.html',
            })
            .when('/report', {
                controller: 'ReportController',
                templateUrl: viewBase + '/report/report.html',
            })
            .when('/viewreport', {
                controller: 'ViewReportController',
                templateUrl: viewBase + '/report/viewreport/viewreport.html',
            })
            .when('/portfoliomapview', {
                controller: 'MapViewPortfoliosController',
                templateUrl: viewBase + '/mapview/portfolio/view.portfolio.html',
            }).otherwise({ redirectTo: '/' });
    }
    angular.module('TheApp').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];

})();