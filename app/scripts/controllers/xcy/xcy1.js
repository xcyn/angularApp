'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:XcyXcy1Ctrl
 * @description
 * # XcyXcy1Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('XcyXcy1Ctrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tabs = [{
      title: 'One',
      url: 'one.tpl.html',
      model:'这是tab栏第一页数据'
    }, {
      title: 'Two',
      url: 'two.tpl.html',
      model:'这是tab栏第二页数据'
    }, {
      title: 'Three',
      url: 'three.tpl.html',
      model:'这是tab栏第三页数据'
    }];


    $scope.currentTab = 'one.tpl.html'

    $scope.onClickTab = function (tab) {
      $scope.currentTab = tab.url;
      console.log('当前的url:')
      console.log($scope.currentTab)
    }

    $scope.isActiveTab = function (tabUrl) {
      console.log('改变的url:');
      console.log(tabUrl)
      return tabUrl == $scope.currentTab;
    }
  });
