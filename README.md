# X16R Hashing Algorithm
<a href="https://discord.gg/mZuXBxW"><img src="https://img.shields.io/discord/571241080373116928" alt="discord"></a>
<a href="https://travis-ci.org/trivechain/x16r-hash-js"><img src="https://img.shields.io/travis/trivechain/x16r-hash-js/master.svg" alt="travis"></a>
<a href='https://www.npmjs.com/package/@trivechain/x16r-hash-js'><img alt="npm" src="https://img.shields.io/npm/dm/@trivechain/x16r-hash-js"></a>
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/@trivechain/x16r-hash-js">

This is a repository for the X16R hashing algorithm that is used by Trivechain beginning April 22nd, 2019 ( TRVC 2.0 fork ).

You can use this repo for nodejs, or simply refer to the C files to see how the algo is implemented.

This library is not built with pure javascript and will not work on browser where fs extensions are unavailable.

### 1. Download / Install with npm / Yarn

```sh
npm install --save @trivechain/x16r-hash-js
yarn add @trivechain/x16r-hash-js
```

### 2. Use the function

```js
const x16rhash = require('@trivechain/x16r-hash-js');
const block_hash = x16rhash.x16r('00000020a61bcd4ddc82e98f293f2182f2b7c5177cfa6d7ffba32912e560f106000000003d838c9ee01cc5c46e8648325996230366046a21243090b0fe0ff649f323432aae9ec55d2c910b1c12f96b3f');
```