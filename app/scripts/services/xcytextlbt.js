'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.xcyTextLbt
 * @description
 * # xcyTextLbt
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
    .factory('xcyTextLbt', function () {
        // Service logic

        var meaningOfLife = 42;

        // Public API here
        return {
            'lbt': function () {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                });
            }
        };


    });
