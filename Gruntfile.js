module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      options : {
      eqeqeq: true,
      trailing : true
    },
      target :['src/**/*.js', 'test/**/*.js']
    },
    concat : {
      options : {
        separator : ';',
      },
      dist : {
        src : ['src/utility.js', 'src/generic.js', 'src/valid.js' ,'src/form.js'],
        dest : 'build/valid.js',
      },

    },
    mocha : {
      test : {
        src : ['test/*.html'],
        options : {
          run : true,
        },
      },

    },

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['jshint', 'concat', 'jshint', 'mocha']);
  


};