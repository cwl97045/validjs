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
        src : ['src/utility.js', 'src/generic.js', 'src/valid.js'],
        dest : 'build/valid.js',
      },

    },

  });	
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['jshint', 'concat', 'jshint']);
  


};