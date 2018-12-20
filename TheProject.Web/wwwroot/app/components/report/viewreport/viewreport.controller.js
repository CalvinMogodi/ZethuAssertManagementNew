(function () {
    'use strict';

    function ViewReportController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'dashboard';

        activate();

        function activate() { }
    }
    angular.module('TheApp').controller('ViewReportController', ViewReportController);
    ViewReportController.$inject = ['$location'];
})();
