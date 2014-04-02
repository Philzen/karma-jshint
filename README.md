# karma-jshint 
[![Dependency Status](https://david-dm.org/philzen/karma-jshint.png)](https://david-dm.org/philzen/karma-jshint)

> Preprocessor to check JavaScript syntax on the fly.

## Installation

```bash
npm install karma-jshint-preprocessor --save-dev
```

## Usage

### Enabling JSLint'ing of your code files

In your Karma config file (nowadays commonly named `karma.conf.js`),
specify the files you want jslint'ed in the preprocessor section like this:

``` javascript
    ...
    preprocessors: {
        ...
        './src/**/*': ['jshint']
    },
    ...
```

### Set [JSHint config options]

You may set your own options by adding a `jshint` section
to your Karma config file :

``` javascript
    ...
    jshint: {
        options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            boss: true,
            devel: true,
            eqnull: true,
            browser: true,
            globals: {
                cordova: true,
                jQuery: true
            }
        }
    },
    ...
```

----

For more information on Karma see the [official Karma runner homepage].


[official Karma runner homepage]: http://karma-runner.github.com
[JSHint config options]: http://www.jshint.com/docs/options/
