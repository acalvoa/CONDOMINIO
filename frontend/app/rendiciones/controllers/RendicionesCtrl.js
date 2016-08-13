'use strict';

angular
    .module('app.rendiciones')
    .controller(
        'RendicionesCtrl',
        function ($scope,
                  $location,
                  gridDataRaw,
                  idCondominio) {

            /*TODO: Gets it from other site*/
            var table = {
                "caption": "Gastos Comunes",
                "editurl": "http://localhost:8000/v1/glosa/"
                    + idCondominio
                    + "/jqgrid/",
                "height": 580,
                "hiddengrid": false,
                "hidegrid": false,
                "grouping": true,
                "colNames": [
                    "id",
                    "Tipo Gasto",
                    "Nombre Gasto",
                    "Descripción",
                    "Documento",
                    "Ingreso",
                    "Egreso"
                ],
                "colModel": [
                    {
                        "name": "id",
                        "index": "id",
                        "hidden": true
                    },
                    {
                        "name": "tipoGasto",
                        "index": "tipoGasto",
                        "editable": true,
                        "edittype": "select",
                        "editoptions": {
                            "value": gridDataRaw.results[0].grupos
                        }
                    },
                    {
                        "name": "nombre",
                        "index": "nombre",
                        "editable": true
                    },
                    {
                        "name": "descripcion",
                        "index": "descripcion",
                        "editable": true
                    },
                    {
                        "name": "documento",
                        "index": "documento",
                        "editable": true
                    },
                    {
                        "name": "ingreso",
                        "index": "ingreso",
                        "align": "right",
                        "formatter": "integer",
                        "editable": true,
                        "fixed": true,
                        "width": 75,
                        "summaryTpl": "{0}",
                        "summaryType": "sum"
                    },
                    {
                        "name": "egreso",
                        "index": "egreso",
                        "align": "right",
                        "formatter": "integer",
                        "editable": true,
                        "fixed": true,
                        "width": 75,
                        "summaryTpl": "{0}",
                        "summaryType": "sum"
                    }
                ],
                "data": gridDataRaw.results[0].data
            };

            $scope.gridData = table;

            $scope.gridData.customButton = {
                id: "ui-prorrotear",
                caption: "Prorrotear",
                buttonicon: "ui-icon-newwin",
                onClickButton: function () {
                    $location.path('/collection/expenses');
                },
                position: "last",
                title: "Prorrotear",
                cursor: "pointer"
            };

        });
