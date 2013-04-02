/*global describe,beforeEach,it,expect,angular,inject,jQuery*/
'use strict';

describe('Directive: passyKonami', function () {
    beforeEach(module('passy'));

    it('should $broadcast "konami" when code was entered', inject(function ($rootScope, $compile) {
        var element = angular.element('<div passy-konami></div>');
        element = $compile(element)($rootScope);

        var childScope = $rootScope.$new(),
            triggered = false;

        childScope.$on('konami', function () {
            triggered = true;
        });

        '38,38,40,40,37,39,37,39,66,65'.split(',').forEach(function (key) {
            var ev = jQuery.Event('keydown');
            ev.which = key;
            ev.keyCode = key;
            element.trigger(ev);
        });
        expect(triggered).toBe(true);
    }));

    it('should execute a callback on konami triggering', inject(function ($rootScope, $compile) {
        var element = angular.element('<div passy-onkonami="callback($element)"></div>');
        element = $compile(element)($rootScope);

        var called = false;
        $rootScope.callback = function konamiCallback($element) {
            // Don't know how to compare element and $element correctly.
            expect($element.attr('passy-onkonami')).toBeTruthy();
            called = true;
        };

        $rootScope.$broadcast('konami');
        expect(called).toBe(true);
    }));
});
