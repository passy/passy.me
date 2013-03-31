/* global passy */
(function () {
    'use strict';

    passy.directive('passyMenu', function ($location) {
        return {
            restrict: 'A',
            scope: {
                href: '@href'
            },
            link: function postLink(scope, element) {
                scope.$on('$routeChangeSuccess', function () {
                    var path = $location.path();

                    if (scope.href === path) {
                        element.parent().addClass('active');
                    } else {
                        element.parent().removeClass('active');
                    }
                });
            }
        };
    });
}());
