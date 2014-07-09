module.exports = function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),


      // Define concat task
    concat: {
      dist: {
        src: [
        'src/prepend.js',
        'bower_components/asciidoctor.js/dist/asciidoctor.js',
        'bower_components/asciidoctor.js/dist/asciidoctor_extensions.js',
        'src/append.js'
        ],
        dest: 'index.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');

  // Define defaults task
  grunt.registerTask('default', ['concat']);


};
