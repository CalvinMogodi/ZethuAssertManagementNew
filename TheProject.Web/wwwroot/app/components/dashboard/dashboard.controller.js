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

        $scope.demo = "Public open space";
        $scope.demo1 = "Roads";
        $scope.demo2 = "Agriculture";
        $scope.demo3 = "Special";

        var dataPoints = [];
        var loopCount = 0;
        var firstPlace = 0;
        var secondPlace = 1;
        var theirthPlace = 2;
        var forthPlace = 3;

        init();

        function init() {
            TheProjectService.getDashboardData(function (data) {
                if (data) {
                    $scope.items = data;
                    $scope.setCarousel($scope.items.DataPoints);
                }
            });
        }


        $scope.carouselPrevious = function (dataPoints) {

            var dataPointsList = dataPoints;
            if (dataPointsList.length >= 0) {
                firstPlace = firstPlace - 4;
                secondPlace = secondPlace - 4;
                theirthPlace = theirthPlace - 4;
                forthPlace = forthPlace - 4;

                if (firstPlace < 0)
                    firstPlace = 0;
                if (secondPlace < 0)
                    secondPlace = 1;
                if (theirthPlace < 0)
                    theirthPlace = 2;
                if (forthPlace < 0)
                    forthPlace = 3;

                if (dataPointsList.length >= 0) {
                    $("#demo").gauge(0, { min: 0, max: 100, unit: "/0", color: "yellow", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demo1").gauge(0, { min: 0, max: 100, unit: "/0", color: "red", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demo2").gauge(0, { min: 0, max: 100, unit: "/0", color: "white", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demo3").gauge(0, { min: 0, max: 100, unit: "/0", color: "orange", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demoText").empty().append("").find('#demoText');
                    $("#demo2Text").empty().append("").find('#demo2Text');
                    $("#demo3Text").empty().append("").find('#demo3Text');
                    $("#demo1Text").empty().append("").find('#demo1Text');

                    if (dataPointsList[firstPlace] != undefined) {
                        $("#demo").gauge(dataPointsList[firstPlace].y, { min: 0, max: dataPointsList[firstPlace].total, unit: "/" + dataPointsList[firstPlace].total, color: "yellow", colorAlpha: 3, bgcolor: "#696969", type: "default" });
                        $("#demoText").empty().append(dataPointsList[firstPlace].label).find('#demoText');
                    }
                    if (dataPointsList[secondPlace] != undefined) {
                        $("#demo1").gauge(dataPointsList[secondPlace].y, { min: 0, max: dataPointsList[secondPlace].total, unit: "/" + dataPointsList[secondPlace].total, color: "red", colorAlpha: 2, bgcolor: "#696969", type: "default" });
                        $("#demo1Text").empty().append(dataPointsList[secondPlace].label).find('#demo1Text');
                    }
                    if (dataPointsList[theirthPlace] != undefined) {
                        $("#demo2").gauge(dataPointsList[theirthPlace].y, { min: 0, max: dataPointsList[theirthPlace].total, unit: "/" + dataPointsList[theirthPlace].total, color: "white", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                        $("#demo2Text").empty().append(dataPointsList[theirthPlace].label).find('#demo2Text');
                    }
                    if (dataPointsList[forthPlace] != undefined) {
                        $("#demo3").gauge(dataPointsList[forthPlace].y, { min: 0, max: dataPointsList[forthPlace].total, unit: "/" + dataPointsList[forthPlace].total, color: "orange", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                        $("#demo3Text").empty().append(dataPointsList[forthPlace].label).find('#demo3Text');
                    }

                    if (dataPointsList[firstPlace] == undefined || dataPointsList[secondPlace] == undefined || dataPointsList[theirthPlace] == undefined || dataPointsList[forthPlace] == undefined) {

                    }
                }
            }
        }

        $scope.setCarousel = function (dataPointsList) { 
            if (dataPointsList.length >= 0) {               

                $("#demo").gauge(0, { min: 0, max: 100, unit: "/0", color: "yellow", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                $("#demo1").gauge(0, { min: 0, max: 100, unit: "/0", color: "red", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                $("#demo2").gauge(0, { min: 0, max: 100, unit: "/0", color: "white", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                $("#demo3").gauge(0, { min: 0, max: 100, unit: "/0", color: "orange", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                $("#demoText").empty().append("").find('#demoText');
                $("#demo2Text").empty().append("").find('#demo2Text');
                $("#demo3Text").empty().append("").find('#demo3Text');
                $("#demo1Text").empty().append("").find('#demo1Text');


                for (var i = 0; i < length; i++) {

                }
                if (dataPointsList[firstPlace] != undefined) {
                    $("#demo").gauge(dataPointsList[firstPlace].y, { min: 0, max: dataPointsList[firstPlace].total, unit: "/" + dataPointsList[firstPlace].total, color: "yellow", colorAlpha: 3, bgcolor: "#696969", type: "default" });
                    $("#demoText").empty().append(dataPointsList[firstPlace].label).find('#demoText');
                }
                if (dataPointsList[secondPlace] != undefined) {
                    $("#demo1").gauge(dataPointsList[secondPlace].y, { min: 0, max: dataPointsList[secondPlace].total, unit: "/" + dataPointsList[secondPlace].total, color: "red", colorAlpha: 2, bgcolor: "#696969", type: "default" });
                    $("#demo1Text").empty().append(dataPointsList[secondPlace].label).find('#demo1Text');
                }
                if (dataPointsList[theirthPlace] != undefined) {
                    $("#demo2").gauge(dataPointsList[theirthPlace].y, { min: 0, max: dataPointsList[theirthPlace].total, unit: "/" + dataPointsList[theirthPlace].total, color: "white", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demo2Text").empty().append(dataPointsList[theirthPlace].label).find('#demo2Text');
                }
                if (dataPointsList[forthPlace] != undefined) {
                    $("#demo3").gauge(dataPointsList[forthPlace].y, { min: 0, max: dataPointsList[forthPlace].total, unit: "/" + dataPointsList[forthPlace].total, color: "orange", colorAlpha: 1, bgcolor: "#696969", type: "default" });
                    $("#demo3Text").empty().append(dataPointsList[forthPlace].label).find('#demo3Text');
                }

                if (dataPointsList[firstPlace] == undefined || dataPointsList[secondPlace] == undefined || dataPointsList[theirthPlace] == undefined || dataPointsList[forthPlace] == undefined) {

                } else {
                    loopCount = loopCount + 1;
                    firstPlace = firstPlace + 4;
                    secondPlace = secondPlace + 4;
                    theirthPlace = theirthPlace + 4;
                    forthPlace = forthPlace + 4;
                }

            }
        }
    }
    angular.module('TheApp').controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$location', '$scope', 'TheProjectService'];
})();
