# uvalib-footer
[![Build Status](https://travis-ci.org/uvalib-components/uvalib-footer.svg?branch=master)](https://travis-ci.org/uvalib-components/uvalib-footer)

An element providing a starting point for your own reusable Polymer elements.

_[Demo and API docs](https://uvalib-components.github.io/uvalib-footer)_

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/uvalib-footer/`, where `uvalib-footer` is the name of the directory containing it.


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

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.


## Yeoman support

If you'd like to use Yeoman to scaffold your element that's possible. The official [`generator-polymer`](https://github.com/yeoman/generator-polymer) generator has a [`seed`](https://github.com/yeoman/generator-polymer#seed) subgenerator.
