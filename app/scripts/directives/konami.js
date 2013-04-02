(function () {
    'use strict';

    window.passy.directive('passyKonami', [function () {
        var code = '38,38,40,40,37,39,37,39,66,65';

        return function passyKonamiDirective(scope, element) {
            var kkeys = [];

            element.on('keydown', function konamiKeydown(e) {
                var kstr;

                kkeys.push(e.keyCode);
                kstr = kkeys.toString();

                if (code.indexOf(kstr.toString()) >= 0) {
                    if (kstr.toString() === code) {
                        scope.$broadcast('konami');
                    }
                } else {
                    kkeys = [];
                }
            });
        };
    }]).directive('passyOnkonami', ['$parse', function ($parse) {
        return function passyOnKonamiDirective(scope, element, attrs) {
            scope.$on('konami', function () {
                var newScope = scope.$new();
                scope.$element = element;

                $parse(attrs.passyOnkonami)(newScope);
            });
        };
    }]);
}());
