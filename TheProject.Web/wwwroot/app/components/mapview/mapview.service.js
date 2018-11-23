(function () {
    'use strict';

    function MapViewService(MapViewFactory) {
        var self = this;

        self.getPortfolios = function (callback) {
            MapViewFactory.getPortfolios().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.getFacilitiesByPortfolioId = function (portfolioId, callback) {
            MapViewFactory.getFacilitiesByPortfolioId(portfolioId).then(function (response) {
                callback(response);
            }, function (error) {
            });
        }
    }

    angular.module('TheApp').service('MapViewService', MapViewService);
    MapViewService.$inject = ['MapViewFactory'];
})();
