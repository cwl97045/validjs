module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      options : {
      eqeqeq: true,
      trailing : true
    },
      target :['src/**/*.js', 'test/**/*.js']
    }

  });	
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};