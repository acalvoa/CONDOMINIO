'use strict';

angular
    .module('app.lecturaServicio')
    .controller(
        'ContratosCtrl',
        function (DTOptionsBuilder,
                  DTColumnBuilder,
                  gridDataRaw,
                  idCondominio) {

            debugger;
            // this.standardOptions = DTOptionsBuilder
            //     .fromSource('api/tables/datatables.standard2.json')
            this.standardOptions = DTOptionsBuilder
                .fromSource(gridDataRaw.results[0].data)

            //Add Bootstrap compatibility
                .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                         "t" +
                         "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
                .withBootstrap();
            this.standardColumns = [
                //DTColumnBuilder.newColumn('id').withClass('text-danger'),
                DTColumnBuilder.newColumn('servicio'),
                DTColumnBuilder.newColumn('departamento'),
                DTColumnBuilder.newColumn('fecha'),
                DTColumnBuilder.newColumn('lectura'),

            ];

        });
