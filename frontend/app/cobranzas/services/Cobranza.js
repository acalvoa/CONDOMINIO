'use strict';

/**
 * @unused by did't resolv two keys in url with restangulars
 */
angular
    .module('app.cobranzas')
    .factory('Cobranza', function (Restangular) {
        return Restangular.service('cobranzas');
    });
