/*
 * grunt-asciidoctor
 * https://github.com/anthonny/grunt-asciidoctor
 *
 * Copyright (c) 2014 Anthonny Quérouil
 * Licensed under the MIT license.
 */

'use strict';


var Ajs = require('asciidoctor.js')();
var Asciidoctor = Ajs.Asciidoctor(true);
var Opal = Ajs.Opal;
var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('asciidoctor', 'The best Grunt plugin ever.', function() {
    var gruntBase = process.cwd();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      cwd: process.cwd(),
      showTitle: true,
      showNumberedHeadings: true,
      showToc: true,
      header_footer: false,
      safeMode: 'secure',
      doctype: 'article',
      backend: 'html5'
    });

    // TODO workaround, We can certainly get extension from Asciidoctor result
    var extensions = {
      html5: '.html',
      docbook45: '.xml',
      docbook5: '.xml'
    };


    // Define asciidoc attibutes
    var attributes = [];
    attributes.push(options.showTitle ? 'showtitle' : 'showtitle!');
    attributes.push(options.showNumberedHeadings ? 'numbered' : 'numbered!');
    attributes.push(options.showToc ? 'toc=preamble toc2!' : 'toc! toc2!');
    attributes.push(options.doctype ? 'doctype='+options.doctype : 'article');
    attributes.push(options.backend ? 'backend='+options.backend : 'html5');

    if (options.attributes) {
      attributes = attributes.concat(options.attributes);
    }

    Opal.ENV['$[]=']("PWD",path.resolve());

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var isDirectory = grunt.file.isDir(f.dest) || grunt.util._.endsWith(f.dest, '/') || f.src.length > 1 || grunt.util._.contains(f.orig.src, '*');
      // Set the current working directory.
      grunt.file.setBase( options.cwd );

      if (!isDirectory && f.src.length > 1) {
        grunt.log.warn('Destination can\'t be file if you have more than one source file.');
        return false;
      }

      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var fileContent = grunt.file.read(filepath);
        var base_dir = path.resolve(path.dirname(f.src));
        var opts = Opal.hash2(['base_dir', 'safe', 'doctype', 'header_footer', 'attributes'], {
            'base_dir': 'file://'.concat(base_dir),
            'safe': options.safeMode,
            'doctype': options.doctype,
            'header_footer': options.header_footer,
            'attributes': attributes
        });
        var content = Asciidoctor.$convert(fileContent, opts);
        //return content;
        var destination = f.dest;
        if (isDirectory){
          destination = path.join(destination, filepath);
          destination = destination.split(path.extname(destination))[0].concat(extensions[options.backend]);
        }
        grunt.file.setBase( gruntBase );
        // Write the destination file.
        grunt.file.write(destination, content);
        grunt.file.setBase( options.cwd );
        // Print a success message.
        grunt.log.writeln('File "' + destination + '" created.');
      });
    });

    grunt.file.setBase( gruntBase );
  });

};
