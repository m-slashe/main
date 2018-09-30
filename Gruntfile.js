module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-zip');

    grunt.initConfig({
        zip: {
            'dist.zip': 'dist/**/*.*'
        }
    })

    grunt.registerTask('default', ['zip']);
}