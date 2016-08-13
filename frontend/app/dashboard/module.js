'use strict';

angular
    .module('app.dashboard', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/condominios/:id_condominio/dashboard',
                data: {
                    title: 'Dashboard'
                },
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard/dashboard.html'
                    }
                },
                resolve: {
                    dashboardDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("dashboard/")
                            .get();
                        
                    },
                    scripts: function (lazyScript) {
                        return lazyScript.register([
                            'build/vendor.graphs.js'
                        ]);
                    }
                }
            });
    });
