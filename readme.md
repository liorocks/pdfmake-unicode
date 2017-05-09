# PDFMake Unicode

[![npm](https://img.shields.io/npm/v/pdfmake-unicode.svg)](https://www.npmjs.com/package/pdfmake-unicode)
[![license](https://img.shields.io/github/license/landish/pdfmake-unicode.svg)](https://github.com/Landish/pdfmake-unicode/blob/master/LICENSE)
[![Demo](https://img.shields.io/badge/View-Demo-green.svg)](https://landish.github.io/pdfmake-unicode/)

Support Unicode Characters in [PDFmake](https://github.com/bpampuch/pdfmake) library.


## Getting Started

> [pdfmake](https://github.com/bpampuch/pdfmake) is library for PDF printing in pure JavaScript.

By default pdfmake uses [Roboto](https://fonts.google.com/specimen/Roboto) font, which does not support Unicode characters.

This package is an extension for adding unicode character support. It comes with a [Arial GEO](http://fonts.ge/en/pack/28/Arial-GEO) font, which has 4 styles: Regular, **Bold**, *Italic* and ***Bold Italic***.

## Installation


Install with [NPM](https://www.npmjs.com):

```
$ npm install pdfmake-unicode --save
```

Install with [Yarn](https://yarnpkg.com/):

```
$ yarn add pdfmake-unicode
```

Install with [Bower](https://bower.io/):

```
$ bower install pdfmake-unicode --save
```

## Usage

> Note: You **don't** need to include `vfs_fonts.js` file from pdfmake library.

```html
<script src="pdfmake.min.js"></script>
<script src="dist/pdfmake-unicode.js"></script>
<script>
  var docDefinition = { content: 'Your unicode text will go here.' };
  pdfMake.createPdf(docDefinition).download('filename.pdf');
</script>

```
### Use with ES6

```js
import pdfMake from 'pdfmake/build/pdfmake';
import pdfMakeUnicode from 'pdfmake-unicode';

// this part is crucial
pdfMake.vfs = pdfMakeUnicode.pdfMake.vfs;

let docDefinition = { content: 'Your unicode text will go here.' };
pdfMake.createPdf(docDefinition).download('filename.pdf');

```

## Supported Languages
* Georgian
* Russian
* Basic Latin

## Licence

The PDFMake Unicode is open-sourced software licensed under the [MIT license](https://github.com/Landish/pdfmake-unicode/blob/master/LICENSE).