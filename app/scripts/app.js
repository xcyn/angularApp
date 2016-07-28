'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
    .module('angularAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/header', {
                templateUrl: 'views/header.html',
                controller: 'HeaderCtrl',
                controllerAs: 'header'
            })
            .when('/xcy/xcy1', {
                templateUrl: 'views/xcy/xcy1.html',
                controller: 'XcyXcy1Ctrl',
                controllerAs: 'xcy/xcy1'
            })
            .when('/footer', {
                templateUrl: 'views/footer.html',
                controller: 'FooterCtrl',
                controllerAs: 'footer'
            })
            .when('/aboutList', {
              templateUrl: 'views/aboutlist.html',
              controller: 'AboutlistCtrl',
              controllerAs: 'aboutList'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function ($rootScope,$window) {
        //��װ������ҳ����ת
        $rootScope.goto = function(url) {
            $window.location.href = url;
        };
    });
