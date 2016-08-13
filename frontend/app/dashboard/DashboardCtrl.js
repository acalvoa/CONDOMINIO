'use strict';

angular
    .module('app.dashboard')
    .controller(
        'DashboardCtrl',
        function ($scope,
                  dashboardDataRaw) {

            $scope.dashboardData = dashboardDataRaw.results[0];
            $scope.nombre = dashboardDataRaw.results[0].nombre;

        });
