var nodeSass = require('node-sass');
var loadGruntTasks = require('load-grunt-tasks');

module.exports = function(grunt) {
  loadGruntTasks(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    htmlhint: {
      all: ["public/src/**/*.html"]
    },
    stylelint: {
      options: {
        configFile: 'etc/.stylelintrc'
      },
      sass: {
        all: ['public/src/sass/**/.scss']
      },
      css: {
        all: ['public/src/css/***.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'public/src/**/*.js']
    },
    htmlmin: {
      options: {
        compress: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      dist: {
        src: "public/src/index.html",
        dest: "public/dist/index.html"
      }
    },
    cssmin: {
      options: {
        compress: true,
        removeComments: false
      },
      libs: {
        src: [

        ],
        dest: 'public/dist/css/libs.css'
      },
      dist: {
        src: [
          'public/src/css/main.css'
        ],
        dest: 'public/dist/css/main.min.css'
      }
    },
    sass: {
      options: {
        implementation: nodeSass,
        sourceMap: true
      },
      dist: {
        src: 'public/src/sass/main.scss',
        dest: 'public/src/css/main.css'
      }
    },
    uglify: {
      options: {
        compress: true,
        removeComments: false
      },
      libs: {
        src: [

        ],
        dest: 'public/dist/js/libs.js'
      },
      dist: {
        src: [
          'public/src/app.js'
        ],
        dest: 'public/dist/app.js'
      }
    },
    express: {
        all: {
            options: {
                port: 9001,
                hostname: '0.0.0.0',
                bases: ['public/dist'],
                livereload: true
            }
        }
    },
    open: {
        all: {
            path: 'http://localhost:<%= express.all.options.port %>'
        }
    },
    watch: {
        options: {
            livereload: true
        },
        gruntfile: {
            files: ['Gruntfile.js'],
            tasks: ['htmlhint', 'htmlmin']
        },
        html: {
            files: ['public/src/**/*.html'],
            tasks: ['htmlhint', 'htmlmin']
        },
        sass: {
          files: ['public/src/sass/**/*.scss'],
          tasks: ['stylelint:sass', 'sass', 'stylelint:css', 'cssmin:dist']
        },
        js: {
          files: ['public/src/**/*.js'],
          tasks: ['jshint', 'uglify:dist']
        }
    }
  });

  grunt.registerTask("serve", [
    "htmlhint",
    "stylelint:sass",
    'jshint',
    'htmlmin',
    'sass:dist',
    'stylelint:css',
    'cssmin',
    'uglify',
    "express",
    "open",
    "watch"
  ]);
};
