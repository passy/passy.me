(function () {
    'use strict';

    window.passy.directive('passyIsotope', ['$timeout', function ($timeout) {
        return function link(scope, element) {
            var $isotope = element.isotope({
                itemSelector: 'li'
            });

            $timeout(function () {
                $isotope.isotope('reLayout');
            });

            element.find('li').click(function () {
                this.classList.toggle('large');
                $isotope.isotope('reLayout');
            });
        };
    }]);
}());
