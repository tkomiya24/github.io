module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var sassFiles = ['sass/**/*.scss'];

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/stylesheet.css': 'sass/stylesheet.scss'
        }
      }
    },
    watch: {
      sass: {
        files: sassFiles,
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('dist', ['sass']);

};
