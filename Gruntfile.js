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
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'stylesheets/stylesheet.css'
      }
    },
    watch: {
      sass: {
        files: sassFiles,
        tasks: ['dist']
      }
    },
    connect: {
      default: {
        hostname: 'localhost',
        keepalive: true
      }
    },
    concurrent: {
      default: {
        target: ['connect', 'watch']
      },
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('dist', ['sass', 'postcss']);

};
