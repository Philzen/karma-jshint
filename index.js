(function (){
  'use strict';

    // TODO (feature) get fs and conditionally load .jshintrc file

    // TODO (feature) implement test group definition similar to grunt-contrib-jshint

  var KarmaJshintReporter = function(karmaConfig, loggerFactory) {
    var jshint, log;
    jshint = require('jshint').JSHINT;
    log = loggerFactory.create('preprocessor.jshint');

    return function(content,file,done){
      var i, errors, options = {};
      log.debug('Processing "%s".', file.originalPath);

      if (karmaConfig.jshint !== undefined && typeof karmaConfig.jshint.options === 'object') {
          options = karmaConfig.jshint.options;
      }

      if(!jshint(content, options)) {
        errors = jshint.data().errors;
        for(i=0;i<errors.length;i++){
          log.error(
            file.originalPath + ': line ' + errors[i].line +
            ', col ' + errors[i].character +
            ', ' + errors[i].reason + ' \n`' +
            errors[i].evidence + '`'
          );
        }
      }

      return done(content);
    };

  };

  KarmaJshintReporter.$inject = ['config', 'logger'];

  module.exports = {
    'preprocessor:jshint': ['factory', KarmaJshintReporter]
  };
}).call(this);
