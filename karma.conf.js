module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'app/bower_components/jquery/jquery.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-jquery/dist/angular-jquery.js',
            'app/bower_components/angular-bootstrap-affix/dist/angular-bootstrap-affix.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'test/mock/**/*.js',
            'test/spec/**/*.js'
        ],
        exclude: [],
        reporters: ['dots'],
        autoWatch: true,
        browsers: ['Chrome', 'Firefox'],
        captureTimeout: 5000,
        singleRun: false,
        reportSlowerThan: 100
    });
};
