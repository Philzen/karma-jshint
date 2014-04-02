(function() {
    'use strict';

    // TODO (feature) get fs and conditionally load .jshintrc file

    // TODO (feature) implement test group definition similar to grunt-contrib-jshint


    var _esc = '\x1b[';
    var COLOR = {
        RED: _esc + '91m',
        LIGHT_RED: _esc + '31m',
        DARK_BLUE: _esc + '34m',
        BLUE: _esc + '94m',
        GREEN: _esc + '32m',
        WHITE: _esc + '37m',
        DARK_GREY: _esc + '31m;1m',
        RESET: _esc + '0m'
    };

    var KarmaJshintReporter = function( karmaConfig, loggerFactory ) {
        var jshint,
            log;
        jshint = require('jshint').JSHINT;
        log = loggerFactory.create('preprocessor.jshint');

        return function( content, file, done ) {
            var i,
                errors,
                errorCount,
                logMessage = 0,
                options = {};

            log.debug('Processing "%s".', file.originalPath);

            if (karmaConfig.jshint !== undefined && typeof karmaConfig.jshint.options === 'object') {
                options = karmaConfig.jshint.options;
            }

            if (!jshint(content, options)) {
                errors = jshint.data().errors;
                errorCount = errors.length;
                logMessage = file.originalPath + '\n';
                for (i = 0; i < errorCount; i++) {
                    logMessage += '    line ' + errors[i].line +
                        ', col ' + errors[i].character + ': '
                        + errors[i].reason + ' \n' +
                        COLOR.DARK_BLUE + '    `' + errors[i].evidence + '`' +
                        COLOR.RESET + '\n';
                }

                logMessage += COLOR.BLUE +
                    file.originalPath.replace(karmaConfig.basePath, '') + ': ' +
                    errorCount + ' JSLint complaints.'+ COLOR.RESET +'\n';

                log.error(logMessage);
            }

            return done(content);
        };

    };

    KarmaJshintReporter.$inject = [ 'config', 'logger' ];

    module.exports = {
        'preprocessor:jshint': [ 'factory', KarmaJshintReporter ]
    };
}).call(this);
