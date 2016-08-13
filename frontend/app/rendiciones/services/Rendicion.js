'use strict';

/**
 * @unused by did't resolv two keys in url with restangulars
 */
angular
    .module('app.rendiciones')
    .factory('Rendicion', function (Restangular) {
        return Restangular.service('rendiciones/report');
    });
