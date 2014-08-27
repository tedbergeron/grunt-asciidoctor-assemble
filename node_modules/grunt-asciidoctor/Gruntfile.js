/*
 * grunt-asciidoctor
 * https://github.com/anthonny/grunt-asciidoctor
 *
 * Copyright (c) 2014 Anthonny Quérouil
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    asciidoctor: {
      default_options: {
        options: {
          cwd: 'test/fixtures/',
          doctype: 'article',
          backend: 'html5'
        },
        files: {
          'tmp/': ['**/*.adoc', '!includes/**/*.adoc']
        }
      },
      docbook5: {
        options: {
          cwd: 'test/fixtures/',
          doctype: 'book',
          backend: 'docbook5',
          safeMode: 'safe',
          header_footer: true
        },
        files: {
          'tmp/': ['**/*.adoc', '!includes/**/*.adoc']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'asciidoctor', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
