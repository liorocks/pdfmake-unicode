# PDFMake Unicode

Support Unicode Characters in [PDFmake](https://github.com/bpampuch/pdfmake) library.


## Getting Started

> [pdfmake](https://github.com/bpampuch/pdfmake) is library for PDF printing in pure JavaScript.

By default pdfmake uses [Roboto](https://fonts.google.com/specimen/Roboto) font, which does not support Unicode characters.

This package is an extension for adding unicode character support. It comes with two fonts [Arial GEO](http://fonts.ge/en/pack/28/Arial-GEO) font, which has 4 styles: Regular, **Bold**, *Italic* and ***Bold Italic***.

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
<script src="build/pdfmake-unicode.js"></script>
<script>
  var docDefinition = { content: 'Your unicode text will go here.' };
  pdfMake.createPdf(docDefinition).download('filename.pdf');
</script>

```


## Licence

The PDFMake Unicode is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).