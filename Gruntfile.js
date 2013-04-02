/*global module:false */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    env: {
      home: process.env.HOME,
      pwd: process.env.PWD
    },

    symlink: {

      'oh-my-zsh': {
        dest: '<%= env.home %>/.oh-my-zsh',
        relativeSrc: '<%= env.pwd %>/submodules/oh-my-zsh',
        options: {
          type: 'dir'
        }
      },

      zshrc: {
        dest: '<%= env.home %>/.zshrc',
        relativeSrc: '<%= env.pwd %>/dotfiles/zshrc'
      },

      'eagle.zsh-theme': {
        dest: 'submodules/oh-my-zsh/themes/eagle.zsh-theme',
        relativeSrc: '<%= env.pwd %>/submodules/eagle.zsh-theme/eagle.zsh-theme'
      },

      gitconfig: {
        dest: '<%= env.home %>/.gitconfig',
        relativeSrc: '<%= env.pwd %>/dotfiles/gitconfig'
      },

      vim: {
        dest: '<%= env.home %>/.vim',
        relativeSrc: '<%= env.pwd %>/submodules/vim',
        options: {
          type: 'dir'
        }
      },

      // Vim Settings
      vimrc: {
        dest: '<%= env.home %>/.vimrc',
        relativeSrc: '<%= env.pwd %>/submodules/vim/vimrc'
      },

      // A file for personal vim settings
      'vimrc.settings': {
        dest: '<%= env.home %>/.vimrc.settings',
        relativeSrc: '<%= env.pwd %>/dotfiles/vimrc.settings'
      },

      jshintrc: {
        dest: '<%= env.home %>/.jshintrc',
        relativeSrc: '<%= env.pwd %>/dotfiles/jshintrc'
      },

      'tmux.conf': {
        dest: '<%= env.home %>/.tmux.conf',
        relativeSrc: '<%= env.pwd %>/dotfiles/tmux.conf'
      }

    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
      // globals: {}
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-symlink');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Sometimes you need to debug some things to figure out what's going on
  // Reference on grunt.log: https://github.com/gruntjs/grunt/wiki/grunt.log
  grunt.registerTask('debug', 'A task to output debugging information.', function () {
    grunt.log.writeflags(process.env);
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'symlink']);

};
