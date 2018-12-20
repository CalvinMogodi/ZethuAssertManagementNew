(function () {
    'use strict';

    function DashboardController($location, $scope, TheProjectService) {

        $scope.items = {
            PropertiesCount: '0',
            PropertiesPercentage: '0',
            VacantPercentage: '0',
            NoOfImprovements: '0',
            ImprovementsSize: '0',
            OccupationStatus: '0',
            DataPoints: []
        };
        init();

        function init() {
            TheProjectService.getDashboardData(function (data) {
                if (data) {
                    $scope.items = data;
                }
            });
        }
    }
    angular.module('TheApp').controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$location', '$scope', 'TheProjectService'];
})();
