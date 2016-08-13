"use strict";

angular
    .module("app.cobranzas")
    .controller(
        "CobranzasCtrl",
        function ($scope,
                  $location,
                  gridDataRaw) {

            $scope.gridData = gridDataRaw;

    });
