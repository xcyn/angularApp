'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.tabChange
 * @description
 * # tabChange
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('tabChange', function () {
    // Service logic
    // ...

    //tab栏的结构必须是
    // {
    // url:******
    // }


    var meaningOfLife = 42;

    // Public API here
    return {
      tc: function ($scope, myDefault) {

        $scope.currentTab = myDefault

        $scope.onClickTab = function (tab) {
          $scope.currentTab = tab.url;
        }

        $scope.isActiveTab = function (tabUrl) {
          return tabUrl == $scope.currentTab;
        }

      }
    };
  });




//$scope.currentTab = 'one.tpl.html'
//
//$scope.onClickTab = function (tab) {
//  $scope.currentTab = tab.url;
//}
//
//$scope.isActiveTab = function (tabUrl) {
//  return tabUrl == $scope.currentTab;
//}
