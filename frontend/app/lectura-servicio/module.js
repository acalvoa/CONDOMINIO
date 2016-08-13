"use strict";

angular
    .module('app.lecturaServicio', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.lecturaServicio', {
                // Esta url hace match entre mes y año del condominio (id)
                url : '/condominios/:id_condominio/lecturaServicio',
                data: {
                    title: 'Lectura Servicio'
                },
                views: {
                    "content@app": {
                        controller: 'LecturaServicioCtrl',
                        templateUrl: 'app/lectura-servicio/views/index.html'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);

                        // return Restangular
                        //     .one("condominios", id_condominio)
                        //     .one("rendiciones", id_rendicion)
                        //     .get();

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("lecturaServicioCondominio")
                            .get();

                    },
                    idCondominio: function ($stateParams) {
                        return parseInt($stateParams.id_condominio);
                    },
                    scripts: function (lazyScript) {
                        return lazyScript.register([
                            'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                            'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                        ]);

                    }
                }
            });

    });
