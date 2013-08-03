'use strict';

window.passy.directive('expandableTiles', function expandableTilesDirective() {
    return {
        restrict: 'A',
        require: '^masonry',
        link: function link(scope, element, attrs, ctrl) {
            element.find(attrs.expandableTiles).click(function () {
                this.classList.toggle('large');
                ctrl.scheduleMasonryOnce();
            });
        }
    };
});
