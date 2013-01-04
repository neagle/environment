Nate Eagle's [Dev] Environment
==============================

This is a project to set up and maintain an awesome dev environment on disparate Unix-based machines.

At one point, I had a dotfiles repo with a list of files that needed to be manually symlinked to my home directory. That was about a billion times lamer than having a command build all those symlinks automatically. Since I'm using Grunt for everything else, I saw no reason not to use Grunt for this, too.

This Grunt project does two things: contains anything I use as a key part of my environment that's a separate git repo (ie, .oh-my-zsh) as a submodule, and holds all of my personal dotfiles.
Running "grunt" symlinks them all to the appropriate places in my home directory, as dictated by the configuration in Gruntfile.js.
