module.exports = function(grunt){
    grunt.initConfig({
        //Package containing our Node modules
        pkg: grunt.file.readJSON('package.json'),
        
        //Tasks
        copy: {
            //Targets/Context
            t1: {
                src: 'dir1/**',
                dest: 'dir2/'
            }
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', 'copy:t1');
};