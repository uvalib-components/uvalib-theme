# \<uvalib-news-section\>
[![Build Status](https://travis-ci.org/uvalib-components/uvalib-news-section.svg?branch=master)](https://travis-ci.org/uvalib-components/uvalib-news-section)

This component handles the Library news display on the homepage

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

To be consistent in making sure to test WCAG2AA levels, we are using both the A11ySuite provided by Web Component Tester as well as Gulp's gulp-accessibility tool since it supports an option for specifying the WCAG level.

```
$ gulp
```

This runs the gulp-accessibility tool against the demo file and generate a report in the ./reports/txt/ directory per the configuration in gulpfile.js

```
$ gulp accessibility
```

In the Travis configuration the process should run this command so that the tool configuration used outputs any errors to the console.
