"use strict";

angular
    .module('app.rendiciones', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.rendicionesMes', {
                // Esta url hace match entre mes y año del condominio (id)
                url : '/condominios/:id_condominio/rendiciones/:id_rendicion',
                data: {
                    title: 'Rendiciones del Mes'
                },
                views: {
                    "content@app": {
                        controller: 'RendicionesCtrl',
                        templateUrl: 'app/rendiciones/views/index.html'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);
                        var id_rendicion = parseInt($stateParams.id_rendicion);

                        // return Restangular
                        //     .one("condominios", id_condominio)
                        //     .one("rendiciones", id_rendicion)
                        //     .get();

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("rendicionActual")
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
