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
            .when('/homepage/header', {
                templateUrl: 'views/homepage/header.html',
                controller: 'HeaderCtrl',
                controllerAs: 'header'
            })
            .when('/xcy/xcy1', {
                templateUrl: 'views/xcy/xcy1.html',
                controller: 'XcyXcy1Ctrl',
                controllerAs: 'xcy/xcy1'
            })
            .when('/homepage/footer', {
                templateUrl: 'views/homepage/footer.html',
                controller: 'FooterCtrl',
                controllerAs: 'footer'
            })
            .when('/aboutList', {
              templateUrl: 'views/aboutlist.html',
              controller: 'AboutlistCtrl',
              controllerAs: 'aboutList'
            })
            .when('/channel/columnl', {
              templateUrl: 'views/channel/column1.html',
              controller: 'ChannelColumn1Ctrl',
              controllerAs: 'channel/column1'
            })
            .when('/openUp/Enterprise', {
              templateUrl: 'views/openup/enterprise.html',
              controller: 'OpenupEnterpriseCtrl',
              controllerAs: 'openUp/Enterprise'
            })
            .when('/openUp/serveNo', {
              templateUrl: 'views/openup/serveno.html',
              controller: 'OpenupServenoCtrl',
              controllerAs: 'openUp/serveNo'
            })
            .when('/openUP/subscribe', {
              templateUrl: 'views/openup/subscribe.html',
              controller: 'OpenupSubscribeCtrl',
              controllerAs: 'openUP/subscribe'
            })
            .when('/manage/manageSubscribe', {
              templateUrl: 'views/manage/managesubscribe.html',
              controller: 'ManageManagesubscribeCtrl',
              controllerAs: 'manage/manageSubscribe'
            })
            .when('/manage/manageServe', {
              templateUrl: 'views/manage/manageserve.html',
              controller: 'ManageManageserveCtrl',
              controllerAs: 'manage/manageServe'
            })
            .when('/manage/manageColumn', {
              templateUrl: 'views/manage/managecolumn.html',
              controller: 'ManageManagecolumnCtrl',
              controllerAs: 'manage/manageColumn'
            })
            .when('/newBuild/topic', {
              templateUrl: 'views/newbuild/topic.html',
              controller: 'NewbuildTopicCtrl',
              controllerAs: 'newBuild/topic'
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
