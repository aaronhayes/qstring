# qstring

[![Build Status](https://travis-ci.org/aaronhayes/qstring.svg?branch=master)](https://travis-ci.org/aaronhayes/qstring)
[![codecov](https://codecov.io/gh/aaronhayes/qstring/branch/master/graph/badge.svg)](https://codecov.io/gh/aaronhayes/qstring)

The easiest way to build querystrings.

## Install

```
$ npm install --save @aaronhayes/qstring
```

```
$ yarn add @aaronhayes/qstring
```

## Usage

```TypeScript
import qstring, { ArrayFormat } from 'qstring';

const qs = qstring('https://myapi.com', {
    foo: 'bar',
    foobar: true,
    foo3: null,
    foo4: undefined
});

console.log(qs);
// https://myapi.com?foo=bar&foobar=true

const qs = qstring(
    'https://myapi.com',
    {
        foo: ['hello', 'world'],
        cat: 'dog'
    }
);

console.log(qs);
// https://myapi.com?foo=hello&foo=world&cat=dog

const qs = qstring(
    'https://myapi.com',
    {
        foo: ['hello', 'world'],
        cat: 'dog'
    },
    ArrayFormat.comma
);

console.log(qs);
// https://myapi.com?foo=hello,world&cat=dog

```

## See Also

- [query-string](https://github.com/sindresorhus/query-string)
- [Classnames](https://github.com/JedWatson/classnames)
- [Typescript Starter](https://github.com/bitjson/typescript-starter)
