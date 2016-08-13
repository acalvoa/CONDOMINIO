"use strict";

angular
    .module('app.residentes', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.residentes', {
                // Esta url hace match entre mes y año del condominio (id)
                url : '/condominios/:id_condominio/residentes',
                data: {
                    title: 'Residentes'
                },
                views: {
                    "content@app": {
                        controller: 'ResidentesCtrl',
                        templateUrl: 'app/residentes/views/index.html'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);

                        return Restangular
                            //.one("condominios", id_condominio)
                            .one("residentes")
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

                    },
                    RestService: function(Restangular){
                        return Restangular.all('residentes/');
                    }
                }
            });

    });
