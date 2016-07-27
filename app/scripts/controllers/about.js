'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
    .controller('AboutCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //��aboutģ�������
        $scope.aboutDatas = [
            {
                id: 0,
                aboutContent: '这是about页面1'
            }, {
                id: 1,
                aboutContent: '这是about页面2'
            }, {
                id: 2,
                aboutContent: '这是about页面3'
            }, {
                id: 3,
                aboutContent: '这是about页面4'
            }, {
                id: 4,
                aboutContent: '这是about页面5'
            }
        ];
    });
