'use strict';

/**
 * @ngdoc function
 * @name daimokuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the daimokuApp
 */
angular.module('daimokuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
