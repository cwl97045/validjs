module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      options : {
      eqeqeq: true,
      trailing : true
    },
      all : ['src/**/*.js', 'test/testrunner/*.js', 'build/**/*.js', '!**/vendor/*.js'],
    },
    concat : {
      options : {
        separator : '',
      },
      dist : {
        src : ['src/global.js','src/utility.js', 'src/generic.js', 'src/valid.js' ,'src/form.js'],
        dest :'build/valid.js',
      },
      test : {
        src : ['src/global.js','src/utility.js', 'src/generic.js', 'src/valid.js' ,'src/form.js'],
        dest : 'manualtest/valid.js',
      }

    },
    mocha : {
      test : {
        src : ['test/*.html'],
        options : {
          run : true,
          log : true
        }
      },

    },

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['jshint', 'concat' ,'mocha', 'concat']);
  


};