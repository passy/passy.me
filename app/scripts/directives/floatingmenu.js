/* global jQuery*/
(function ($) {
    'use strict';

    window.passy.directive('passyFloatingmenu', [function () {
        return function link(scope, element) {
            // Okay, I know you should never do this, but I would have to
            // rewrite the plugin for a *really* correct way to do this.
            element.portamento({wrapper: $('[role=main]')});
        };
    }]);
}(jQuery));
