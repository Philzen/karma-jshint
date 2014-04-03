# karma-jshint 
[![Dependency Status](https://david-dm.org/philzen/karma-jshint.png)](https://david-dm.org/philzen/karma-jshint)
[![Code Climate](https://codeclimate.com/github/Philzen/karma-jshint.png)](https://codeclimate.com/github/Philzen/karma-jshint)

> Preprocessor / Plugin for Karma to check JavaScript syntax on the fly.

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

### Configuration

You may set your own options by adding a `jshint` section
to your Karma config file, for example :

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
        },
        summary: true
    },
    ...
```

#### `jshint.options`

An object with [JSHint config options].

#### `summary`

Show a summary of all jshint'ed files, aggregated across error types.

----

For more information on Karma see the [official Karma runner homepage].


[official Karma runner homepage]: http://karma-runner.github.com
[JSHint config options]: http://www.jshint.com/docs/options/
