'use strict';

angular
    .module('app.residentes')
    .controller(
        'ResidentesCtrl',
        function($scope, $http, $q, DTOptionsBuilder,
                 DTColumnBuilder,
                 idCondominio, RestService, Restangular) {

            //debugger;
    $scope.registration = {
      rut: null,
      nombre: null,
      fecha_ingreso: '2016-08-03',
      apellido_paterno: null,
      apellido_materno: null,
      genero: -1,
      fono: null,
      email: null
    };

    // ESTE CODIGO FUNCIONARA MIENTRAS TANTO PERO DEBE SER REVISADO POR UN 
    // CODIGO QUE CAMBIE DINAMICAMENTE AS COLUMNAS A PARTIR DEL OBJETO DATAGRID
    $scope.standardOptions = DTOptionsBuilder
        .fromFnPromise(function() {
            var defer = $q.defer();
            Restangular
            .one("residentes")
            .get()
            .then(function(data){
              defer.resolve(data.results);
            });
            return defer.promise;
        })
    $scope.standardColumns = [
        //DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('rut'),
        DTColumnBuilder.newColumn('nombres'),
        DTColumnBuilder.newColumn('apellido_paterno'),
        DTColumnBuilder.newColumn('apellido_materno'),
        DTColumnBuilder.newColumn('genero'),
        DTColumnBuilder.newColumn('fono'),
        DTColumnBuilder.newColumn('email'),
        DTColumnBuilder.newColumn('fecha_ingreso')
    ];

    $scope.dtInstance = {};

    $scope.crearUsuario = function(form){
      if(form.$valid){
        RestService.post($scope.registration).then(function(data) {
           $scope.dtInstance.reloadData();
           $scope.registration = {
              rut: null,
              nombre: null,
              fecha_ingreso: '2016-08-03',
              apellido_paterno: null,
              apellido_materno: null,
              genero: -1,
              fono: null,
              email: null
            };
        });  
      }
    }
});
