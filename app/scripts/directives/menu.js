(function () {
    'use strict';

    window.passy.directive('passyMenu', ['$location', function ($location) {
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
    }]);
}());
