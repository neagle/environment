/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['Gruntfile.js']
    },
    symlink: {
      dotfiles: {
        relativeSrc: grunt.file.expandMapping(
          ['dotfiles/*'],
          'dest',
          { cwd: 'dotfiles' }
        ),
        options: {
          type: 'file'
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-symlink');

  // Default task.
  grunt.registerTask('default', 'lint test');

};
