asciidoctorjs-npm-wrapper
=========================
A wrapper to use [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js) with NPM

Asciidoctor.js current version : *1.5.0-preview.7**

### Installation
```
npm install asciidoctorjs-npm-wrapper --save
```

### Usage
```
var asciidoctor = require('asciidoctorjs-npm-wrapper').Asciidoctor;

// You can also get Opal instance
var opal = require('asciidoctorjs-npm-wrapper').Opal;

console.log(asciidoctor.$convert('== Test', null));

/*
<div class="sect1">
<h2 id="_test">Test/h2>
<div class="sectionbody">

</div>
</div>
*/

```

### License
MIT
