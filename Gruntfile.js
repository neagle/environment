/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    home: process.env.HOME,
    lint: {
      files: ['Gruntfile.js']
    },
    symlink: {

      'oh-my-zsh': {
        dest: '<%= home %>/.oh-my-zsh',
        relativeSrc: process.env.PWD + '/submodules/oh-my-zsh',
        options: {
          type: 'dir'
        }
      },

      zshrc: {
        dest: '<%= home %>/.zshrc',
        relativeSrc: process.env.PWD + '/dotfiles/zshrc'
      },

      'eagle.zsh-theme': {
        dest: 'submodules/oh-my-zsh/themes/eagle.zsh-theme',
        relativeSrc: process.env.PWD + '/submodules/eagle.zsh-theme/eagle.zsh-theme'
      },

      gitconfig: {
        dest: '<%= home %>/.gitconfig',
        relativeSrc: process.env.PWD + '/dotfiles/gitconfig'
      },

      vim: {
        dest: '<%= home %>/.vim',
        relativeSrc: process.env.PWD + '/submodules/vim',
        options: {
          type: 'dir'
        }
      },

      // Vim Settings
      vimrc: {
        dest: '<%= home %>/.vimrc',
        relativeSrc: process.env.PWD + '/submodules/vim/vimrc'
      },

      // A file for personal vim settings
      'vimrc.settings': {
        dest: '<%= home %>/.vimrc.settings',
        relativeSrc: process.env.PWD + '/dotfiles/vimrc.settings'
      },

      'jshintrc': {
        dest: '<%= home %>/.jshintrc',
        relativeSrc: process.env.PWD + '/dotfiles/jshintrc'
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

  grunt.registerTask('debug', 'A task to output debugging information.', function () {
    grunt.log.writeln('Debug this!');

    grunt.log.writeflags(process.env);
  });

  // Default task.
  grunt.registerTask('default', ['symlink']);
  // grunt.registerTask('default', ['debug']);

};
