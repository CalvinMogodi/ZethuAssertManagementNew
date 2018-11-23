(function () {
    'use strict';

    function MapViewFactory($http, $q, projectApi) {

        var getPortfolios = function () {
            var defered = $q.defer();
            var getPortfoliosComplete = function (response) {
                defered.resolve(response.data);
            }

            $http.get(projectApi + '/Portfolio/GetPortfolios')
                .then(getPortfoliosComplete, function (err, status) {
                    defered.reject(err);
                });

            return defered.promise;
        }

        var getFacilitiesByPortfolioId = function (portfolioId) {
            var defered = $q.defer();
            var getFacilitiesByPortfolioIdComplete = function (response) {
                defered.resolve(response.data);
            }

            $http.get(projectApi + '/Facility/GetFacilitiesByPortfolioId?portfolioId=' + portfolioId)
                .then(getFacilitiesByPortfolioIdComplete, function (err, status) {
                    defered.reject(err);
                });

            return defered.promise;
        }

        return {
            getPortfolios: getPortfolios,
            getFacilitiesByPortfolioId: getFacilitiesByPortfolioId
        };
    }

    angular.module('TheApp').service('MapViewFactory', MapViewFactory);
    MapViewFactory.$inject = ['$http', '$q', 'projectApi'];
})();