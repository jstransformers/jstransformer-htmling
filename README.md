# jstransformer-htmling

[HTMLing](https://github.com/codemix/htmling) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-htmling/master.svg)](https://travis-ci.org/jstransformers/jstransformer-htmling)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-htmling/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-htmling)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-htmling/master.svg)](http://david-dm.org/jstransformers/jstransformer-htmling)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-htmling.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-htmling.svg)](https://www.npmjs.org/package/jstransformer-htmling)

## Installation

    npm install jstransformer-htmling

## API

```js
var htmling = require('jstransformer')(require('jstransformer-htmling'))

htmling.render('<h1>Hello, {{title}}!</h1>', { name: 'World' }).body
//=> '<h1>Hello, World!</h1>'
```

## License

MIT
