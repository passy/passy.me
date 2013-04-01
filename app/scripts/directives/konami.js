/*global jQuery*/
(function ($) {
    'use strict';

    window.passy.directive('passyKonami', [function () {
        var code = '38,38,40,40,37,39,37,39,66,65';

        return function passyKonamiDirective(scope, element, attr) {
            var kkeys = [];

            $(document).on('keydown', function konamiKeydown(e) {
                var kstr;
                kkeys.push(e.keyCode);
                kstr = kkeys.toString();

                if (code.indexOf(kstr.toString()) >= 0) {
                    if (kstr.toString() === code) {
                        scope.$apply(attr.passyKonami);
                    }
                } else {
                    kkeys = [];
                }
            });
        };
    }]);
}(jQuery));
