import test from 'ava';

import qstring, { ArrayFormat } from '../index';

test('should correctly handle string type', t => {
  const qs = qstring('https://myapi.com', {
    variable: 'value'
  });

  t.is(qs, 'https://myapi.com?variable=value');
});

test('should correctly handle null type', t => {
  const qs = qstring('https://myapi.com', {
    variable: null
  });

  t.is(qs, 'https://myapi.com');
});

test('should correctly handle undefined type', t => {
  const qs = qstring('https://myapi.com', {
    variable: undefined
  });

  t.is(qs, 'https://myapi.com');
});

test('should correctly handle number type', t => {
  const qs = qstring('https://myapi.com', {
    variable: 10
  });

  t.is(qs, 'https://myapi.com?variable=10');
});

test('should correctly handle boolean (false) type', t => {
  const qs = qstring('https://myapi.com', {
    variable: false
  });

  t.is(qs, 'https://myapi.com?variable=false');
});

test('should correctly handle boolean (true) type', t => {
  const qs = qstring('https://myapi.com', {
    variable: true
  });

  t.is(qs, 'https://myapi.com?variable=true');
});

test('should correctly handle multiple variables', t => {
  const qs = qstring('https://myapi.com', {
    foo: 'hello',
    bar: 'world',
    cat: null
  });

  t.is(qs, 'https://myapi.com?foo=hello&bar=world');
});

test('should correctly handle array variables - simple encoding', t => {
  const qs = qstring('https://myapi.com', {
    foo: ['hello', 'world'],
    cat: null
  });

  t.is(qs, 'https://myapi.com?foo=hello&foo=world');
});

test('should correctly handle array variables - comma encoding', t => {
  const qs = qstring(
    'https://myapi.com',
    {
      foo: ['hello', 'world'],
      cat: 'dog'
    },

    ArrayFormat.comma
  );

  t.is(qs, 'https://myapi.com?foo=hello,world&cat=dog');
});

test('should correctly handle empty options', t => {
  const qs = qstring('https://myapi.com', {});

  t.is(qs, 'https://myapi.com');
});
