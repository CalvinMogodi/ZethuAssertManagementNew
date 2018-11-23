(function () {
    'use strict';

    function MapViewPortfoliosController($location, $scope, MapViewService) {
        var vm = this;
        vm.map;
        init();

        function init() {
            //MapViewService.getPortfolios(function (data) {
            //    if (data) {
           //         vm.Portfolios = data;
           //     }
           // });

            var options = {
                center: new google.maps.LatLng(-26.1773723,28.0161912),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            vm.map = new google.maps.Map(
                document.getElementById("map"), options
            );

            vm.InfoWindow = new google.maps.InfoWindow();
            vm.Latlngbounds = new google.maps.LatLngBounds();
            vm.places = new google.maps.places.PlacesService(vm.map); 
        }

        vm.search = function (str) {
            var d = $q.defer();
            vm.places.textSearch({ query: str }, function (results, status) {
                if (status == 'OK') {
                    d.resolve(results[0]);
                }
                else d.reject(status);
            });
            return d.promise;
        }

        vm.addMarker = function (res) {
            if (vm.marker) vm.marker.setMap(null);
            vm.marker = new google.maps.Marker({
                map: vm.map,
                position: res.geometry.location,
                animation: google.maps.Animation.DROP
            });
            vm.map.setCenter(res.geometry.location);
        }

        $scope.getPortfolioData = function (portfolio) {
            portfolio = {
                id: null,
            }
            MapViewService.getFacilitiesByPortfolioId(portfolio.id,function (data) {
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        var facility = data[i];
                        var position1 = new google.maps.LatLng(facility.Latitude, facility.Longitude);
                        var marker = new google.maps.Marker({ position: position1, title: facility.Description});
                        marker.setMap(vm.map);
                    }
                }
            });
        }

        vm.navigateTo = function (url) {
            $location.path(url);
        }
    }

    angular.module('TheApp').controller('MapViewPortfoliosController', MapViewPortfoliosController);
    MapViewPortfoliosController.$inject = ['$location', '$scope', 'MapViewService'];
}) ();