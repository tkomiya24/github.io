module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/stylesheet.css': 'sass/stylesheet.scss'
        }
      }
    }
  });

  grunt.registerTask('dist', ['sass']);

};
