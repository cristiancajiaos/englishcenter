var lodderTimeGrunt = require('@lodder/time-grunt');
var nodeSass = require('node-sass');
var loadGruntTasks = require('load-grunt-tasks');

module.exports = function(grunt) {
  lodderTimeGrunt(grunt);
  loadGruntTasks(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      dist: ['public/dist', 'public/src/css', 'public/src/app.templates.js']
    },
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
    ngtemplates: {
      dist: {
        cwd: 'public/src/app',
        src: ['views/**/*.html', 'layout/**/*.html'],
        dest: 'public/src/app.templates.js',
        options: {
          module: 'app',
          htmlmin: '<%= htmlmin.options %>'
        }
      }
    },
    cssmin: {
      options: {
        compress: true,
        removeComments: true
      },
      libs: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'node_modules/ui-bootstrap4/dist/ui-bootstrap-csp.css',
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
        removeComments: false,
        mangle: {
          reserved: ['$stateProvider', '$urlRouterProvider']
        }
      },
      libs: {
        src: [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/popper.js/dist/umd/popper.js',
          'node_modules/bootstrap/dist/js/bootstrap.js',
          'node_modules/angular/angular.js',
          'node_modules/angular-animate/angular-animate.js',
          'node_modules/angular-touch/angular-touch.js',
          'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
          'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
          'node_modules/@fortawesome/fontawesome-free/js/all.js'
        ],
        dest: 'public/dist/js/libs.js'
      },
      dist: {
        src: [
          'public/src/app.js',
          'public/src/app.templates.js',
          'public/src/app/**/*.js'
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
            tasks: ['htmlhint', 'htmlmin', 'ngtemplates', 'jshint', 'uglify:dist']
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
    "clean",
    "htmlhint",
    "stylelint:sass",
    'jshint',
    'htmlmin',
    'ngtemplates',
    'sass:dist',
    'stylelint:css',
    'cssmin',
    'uglify',
    "express",
    "open",
    "watch"
  ]);
};
