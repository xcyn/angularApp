'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $timeout, $document, xcyTextLbt) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //swiper的轮播图功能
    xcyTextLbt.lbt();
    //让main部分铺满整屏（如果不fixed）
    //$scope.getFullHeight = function () {
    //  var windowHeight = window.innerHeight;
    //  var homePageMain = $document[0].getElementsByClassName('homePage-main')[0];
    //  $timeout(function () {
    //    var headerHeight = homePageMain.offsetTop;
    //    var divHeight = windowHeight - headerHeight;
    //    homePageMain.style.height = divHeight + 'px';
    //  })
    //}
    //$scope.getFullHeight();
  });
