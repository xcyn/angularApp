'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:XcyXcy1Ctrl
 * @description
 * # XcyXcy1Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('XcyXcy1Ctrl', function ($scope, tabChange) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tabs = [{
      title: 'One',
      url: 'one.tpl.html',
      model: '这是tab栏第一页数据'
    }, {
      title: 'Two',
      url: 'two.tpl.html',
      model: '这是tab栏第二页数据'
    }, {
      title: 'Three',
      url: 'three.tpl.html',
      model: '这是tab栏第三页数据'
    }];

    tabChange.tc($scope, 'one.tpl.html');

  });
