module.exports = function (grunt) {
    // Configuration
    grunt.initConfig({
        // pass in options to plugins, references to files etc
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                // src: ['src/js/file1.js', 'src/js/file2.js', 'src/js/file3.js']
                src: ['src/js/*.js'],
                dest: 'dist/js/main,js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'dist/css/style.css'
            }
        },
        staticdev:{
            demo:{
                src  : "src/html/*",
                dest : "dist/"
            }
        },
        watch: {
            html: {
                files: ["src/html/*","src/html/component/*"],
                tasks: ['staticdev:demo']
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('static-dev');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Plugins Setup
    grunt.option('force', true);

    // Register Tasks
    grunt.registerTask('run', function(){
        console.log("I am running");
    })
    grunt.registerTask('sleep', function(){
        console.log("I am sleeping");
    })
    grunt.registerTask('all', ['sleep', 'run']);

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

    grunt.registerTask('static-dev', ['staticdev']);
    grunt.registerTask('static-dev-watch', ['staticdev', 'watch']);
}