'use strict';

/**
 * @ngdoc function
 * @name daimokuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the daimokuApp
 */
angular.module('daimokuApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
