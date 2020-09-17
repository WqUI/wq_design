'use strict';

const output = process.env.BABEL_OUTPUT;
const modules = output == null ? false : output;

const options = {
  "plugins": [
    '@babel/proposal-object-rest-spread',
    ['@babel/proposal-class-properties', { loose: true }],
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    ['@babel/env', { loose: true, modules }, 'one'],
    "@babel/preset-env",
    "@babel/preset-react"
  ]
};

module.exports = options;