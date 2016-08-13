'use strict';

/**
 * @unused by did't resolv two keys in url with restangulars
 */
angular
    .module('app.rendiciones')
    .factory('ResidentesService', function (Restangular) {
        return Restangular.service('residentes');
    });
