"use strict";

angular
    .module('app.cobranzas', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.cobranzasMes', {
                url: '/condominios/:id_condominio/cobranzas/:id_cobranza',
                data: {
                    title: 'Cobranzas'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/cobranzas/views/index.html',
                        controller: 'CobranzasCtrl'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);
                        var id_cobranza = parseInt($stateParams.id_cobranza);

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("cobranzas", id_cobranza)
                            .get();

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
