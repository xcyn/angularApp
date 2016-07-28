'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutlistCtrl
 * @description
 * # AboutlistCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('AboutlistCtrl', function ($scope,$sce,$location,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var id = $location.search().id;
    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
      .success(function(response) {
        //$scope.names = response.records;
        console.log(response)
      });
    var aboutList = {
      list_0:{
        content:$sce.trustAsHtml('<div>about的详细跳转页面1</div>')
      },
      list_1:{
        content:$sce.trustAsHtml('<div>about的详细跳转页面2</div>')
      },
      list_2:{
        content:$sce.trustAsHtml('<div>about的详细跳转页面3</div>')
      },
      list_3:{
        content:$sce.trustAsHtml('<div>about的详细跳转页面4</div>')
      },
      list_4:{
        content:$sce.trustAsHtml('<div>about的详细跳转页面5</div>')
      },
    };
    $scope.aboutLists = aboutList['list_' + id];
  });
