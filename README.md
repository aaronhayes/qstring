# qstring

[![npm (scoped)](https://img.shields.io/npm/v/@aaronhayes/qstring?style=flat-square)](https://www.npmjs.com/package/@aaronhayes/qstring)
![Build](https://img.shields.io/travis/aaronhayes/qstring?style=flat-square)
![Codecov](https://img.shields.io/codecov/c/github/aaronhayes/qstring?style=flat-square)
[![Bundle Size](https://img.shields.io/bundlephobia/min/@aaronhayes/qstring?style=flat-square)](https://bundlephobia.com/result?p=@aaronhayes/qstring@1.0.1)
![License](https://img.shields.io/npm/l/@aaronhayes/qstring?style=flat-square)

The easiest way to build querystrings. A lightweight, easy to use way to build full urls including the querystring. Less than [400B Minified & GZipped](https://bundlephobia.com/result?p=@aaronhayes/qstring@1.0.1)!

The popular [query-string](https://github.com/sindresorhus/query-string) only handles the part querystring part, so there is another step of building the final url. The API inspired by JedWatson's [Classnames](https://github.com/JedWatson/classnames) Package.

## Install

```
$ npm install --save @aaronhayes/qstring
```

```
$ yarn add @aaronhayes/qstring
```

## Usage

```TypeScript
import qstring, { ArrayFormat } from '@aaronhayes/qstring';

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
