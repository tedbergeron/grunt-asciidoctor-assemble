var asciidoc = require('./index.js').Asciidoctor;

console.log(asciidoc.$convert('== Test', null));
