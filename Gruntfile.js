module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true 
        },
        src: ['test/**/*.js']
      },
    },

    watch: {

        options: {
          spawn: false, //set to true to stop the problem from happening
          livereload: 12345, //port number doesn't matter, the problem is reproduced on any port
        },
        files: '**/*.js',
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');
};
