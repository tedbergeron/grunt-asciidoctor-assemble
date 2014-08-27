# grunt-asciidoctor

> A Grunt plugin that uses Asciidoctor via Asciidoctor.js to process AsciiDoc source files within the project.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-asciidoctor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-asciidoctor');
```

## The "asciidoctor" task

### Overview
In your project's Gruntfile, add a section named `asciidoctor` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  asciidoctor: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.cwd
Type: `String`
Default value: `''`

A string to define the current working directory, default is the grunt project directory

#### options.showTitle
Type: `Boolean`
Default value: `true`

A boolean value to show or hide the title in html result.

#### options.showNumberedHeadings
Type: `Boolean`
Default value: `true`

A boolean value to show or hide numbered headings

#### options.showToc
Type: `Boolean`
Default value: `true`

A boolean value to show or hide table of contents

#### options.header_footer
Type: `Boolean`
Default value: `false`

A boolean value to show or hide header and footer of the HTML document

#### options.safeMode
Type: `String`
Default value: `'secure'`

A string value to define the security mode.

#### options.doctype
Type: `String`
Default value: `'article'`

A string value to define the doctype.

#### options.backend
Type: `String`
Default value: `'html5'`

A string value to define the backend.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  asciidoctor: {
    options: {},
    files: {
      'dest/asciidoc': ['adocument.adoc', 'adocs/**/*.adoc'],
    },
  },
});
```

#### Custom Options


```js
grunt.initConfig({
  asciidoctor: {
    options: {
      cwd: 'test/fixtures/',
      showTitle: false,
      showNumberedHeadings: false,
      showToc: false,
      header_footer: true,
      safeMode: 'secure',
      doctype: 'article',
      backend: 'html5'
    },
    files: {
      'dest/asciidoc': ['adocument.adoc', 'adocs/**/*.adoc'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
