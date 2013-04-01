/*global passy*/
(function () {
    'use strict';

    passy.controller('IndexCtrl', ['$scope', function ($scope) {
        $scope.doMagic = function (element) {
            element.attr('src', 'http://i.imgur.com/MGXqGQe.gif');
        };
    }]);
}());
