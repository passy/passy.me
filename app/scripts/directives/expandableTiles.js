'use strict';

window.passy.directive('expandableTiles', function expandableTilesDirective() {
    return {
        restrict: 'A',
        link: function link(scope, element, attrs) {
            element.find(attrs.expandableTiles).click(function () {
                this.classList.toggle('large');
            });
        }
    };
});
