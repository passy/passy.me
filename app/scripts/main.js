/*global angular*/

(function (window) {
    'use strict';

    window.passy = angular.module('passy', [], function ($routeProvider,
                                                         $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/index.html'
        }).when('/projects.html', {
            templateUrl: 'pages/projects.html',
            controller: 'ProjectsCtrl'
        });

        // Static pages
        ['changelog'].forEach(function (page) {
            $routeProvider.when(['/', page, '.html'].join(''), {
                templateUrl: ['pages/', page, '.html'].join('')
            });
        });

        $locationProvider.html5Mode(true);
    });
}(this));
