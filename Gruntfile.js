/*
 * grunt-asciidoctor-assemble
 * https://github.com/tedbergeron/grunt-asciidoctor-assemble
 *
 * Copyright (c) 2014 Ted Bergeron
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  
	// Before generating any new files, remove any previously created files.
    clean: {
		all: ['rendered', 'website/*.html']
    },

    asciidoctor: {
      default_options: {
        options: {
          cwd: 'docs/',
		  //showTitle: false,			// overridden when header_footer: true
		  //header_footer: true,		// do not want this for this project, using our own template.		  
		  icons: 'font' 				// this doesn't work. Unsure how to render icons with this.
        },
        files: {
          // Mostly supports markdown files too
          'rendered/': ['**/*.adoc', '!includes/**/*.adoc', '**/*.md']		  
        }
      }
    },
	
	
	pkg: grunt.file.readJSON('package.json'),
	
	assemble: {
		options: {
			layout: 'template/bootstrap-starter-template.hbs',
			flatten: true
		},
		pages: {
			files: {
				'website/': ['rendered/*.html']
			}
		}
	}

  });
  

  // necessary tasks.
  grunt.loadNpmTasks('grunt-asciidoctor');
  grunt.loadNpmTasks('grunt-contrib-clean');  
  grunt.loadNpmTasks('assemble');
  
  // grunt default run
  grunt.registerTask('default', ['clean', 'asciidoctor', 'assemble']);

};