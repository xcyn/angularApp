'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:footer
 * @description
 * # footer
 */
angular.module('angularAppApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
