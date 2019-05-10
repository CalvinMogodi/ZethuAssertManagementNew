(function () {
    'use strict';

    function TheProjectService($http, $q, $sessionStorage, TheProjectFactory) {
        var self = this;
        self.selectedFacility = {};
        self.selectedBuilding = {};
        self.selectedUser = {};

        self.setSelectedFacility = function (facility) {
            self.selectedFacility = facility;
        }

        self.getSelectedFacility = function () {
            return self.selectedFacility;
        }

        self.setSelectedUser = function (user) {
            self.selectedUser = user;
        }

        self.getSelectedUser = function () {
            return self.selectedUser;
        }

        self.setSelectedBuilding = function (building) {
            self.selectedBuilding = building;
        }

        self.getSelectedBuilding = function () {
            return self.selectedBuilding;
        }

        self.getPortfolios = function (callback) {
            TheProjectFactory.getPortfolios().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.getDashboardData = function (callback) {
            TheProjectFactory.getDashboardData().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }
        
        self.addPortfolio = function (portfolio, callback) {
            TheProjectFactory.addPortfolio(portfolio).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.addPortfolio = function (portfolio, callback) {
            TheProjectFactory.addPortfolio(portfolio).then(function (response) {
                callback(response);
            }, function (error) {
            });
        }

        self.addFacility = function (facility, callback) {
            TheProjectFactory.addFacility(facility).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.addBuilding = function (building, callback) {
            TheProjectFactory.addBuilding(building).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.updateBuilding = function (building, callback) {
            TheProjectFactory.updateBuilding(building).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }
        
        self.loginUser = function (user , callback) {
            TheProjectFactory.loginUser(user).then(function (response) {
                callback(response);
            }, function (error) {
            });
        }

        self.getBuildings = function (callback) {
            TheProjectFactory.getBuildings().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.getFacilities = function (callback) {
            TheProjectFactory.getFacilities().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        } 

        self.downloadFacilityReport = function (clientCode) {
            if (clientCode) {
                TheProjectFactory.downloadFacilityReport(clientCode).then(function (response) {
                    var returnfile = new Blob([response], {
                        type: 'application/pdf'
                    });
                    var fileURL = URL.createObjectURL(returnfile);
                    if (window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(returnfile, 'Facility Report.pdf');
                    } else {
                        window.open(fileURL);
                    }
                });
            }
        }

        self.getSubmittedFacilities = function (callback) {
            TheProjectFactory.getSubmittedFacilities().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.getFacilitiesForReport = function (callback) {
            TheProjectFactory.getFacilitiesForReport().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }
        
        self.getUnassignedFacilities = function (callback) {
            TheProjectFactory.getUnassignedFacilities().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            }); 
        }

        self.addUser = function (user, callback) {
            TheProjectFactory.addUser(user).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.addClient = function (client, callback) {
            TheProjectFactory.addClient(client).then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }


        self.getUsers = function (callback) {
            TheProjectFactory.getUsers().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }

        self.getClients = function (callback) {
            TheProjectFactory.getClients().then(function (response) {
                callback(response);
            }, function (error) {
                //alertDialogService.setHeaderAndMessage('Error Has Occurred ', 'Unable to get contracts. Please retry again, if the issue persists contact administrator.');
                //var templateUrl = '/app/common/alert/infoDialog.template.html';
                //modal.show(templateUrl, 'alertDialogController');
            });
        }
    }

    angular.module('TheApp').service('TheProjectService', TheProjectService);
    TheProjectService.$inject = ['$http', '$q', '$sessionStorage', 'TheProjectFactory'];
})();
