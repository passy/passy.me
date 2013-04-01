/*global passy,jQuery*/
(function ($) {
    'use strict';

    passy.controller('IndexCtrl', ['$scope', function ($scope) {
        $scope.doMagic = function () {
            $('.saying-hi .me').attr('src', 'http://i.imgur.com/MGXqGQe.gif');
        };
    }]);
}(jQuery));
