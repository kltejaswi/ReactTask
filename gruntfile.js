// grunt.loadNpmTasks('grunt-war');


// grunt.registerTask('default', ['war']);
module.exports = function ( grunt ) {
    grunt.loadNpmTasks( 'grunt-war' );
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');


    var taskConfig = {
        war: {
            target: {
                options: {
                    war_verbose: true,
                    war_dist_folder: 'war_dist',           // Folder path seperator added at runtime. 
                    war_name: 'Rinat',            // .war will be appended if omitted 
                    webxml_welcome: 'Rinat/index.html',
                    webxml_display_name: 'react Frontend',
                    webxml_webapp_extras: [
                    '<error-page><error-code>404</error-code><location>/Rinat/index.html</location></error-page>',
                    ],
                },
                files: [
                {
                    expand: true,
                    cwd: 'build',
                    src: ['**'],
                    dest: ''
                }
                ]
            }
        },
        copy: {
            copyCss: {
                cwd: './',
                src: ['node_modules/semantic-ui-css/semantic.css'],
                dest: 'src/client/app/css/',
                expand: true,
                flatten: true,
            },
            copyCssWarBuild: {
                cwd: './',
                src: ['src/client/app/css/*'],
                dest: 'war_build/css',
                flatten: true,   
                expand: true,
            },
            copyBundleWarBuild: {
                cwd: './',
                src: ['src/client/public/*'],
                dest: 'war_build/public',
                flatten: true,   
                expand: true,
            },
            copyIndexWarBuild: {
                cwd: './',
                src: ['src/client/app/*'],
                dest: 'war_build/Rinat',
                flatten: true,   
                expand: true,
                filter: 'isFile',
            },
            copyCssDist: {
                cwd: './',
                src: ['src/client/app/css/*'],
                dest: 'dist/css',
                flatten: true,   
                expand: true,
            },
            copyBundleDist: {
                cwd: './',
                src: ['src/client/public/*'],
                dest: 'dist/public',
                flatten: true,   
                expand: true,
            },
            copyIndexDist: {
                cwd: './',
                src: ['src/client/app/*'],
                dest: 'dist',
                flatten: true,   
                expand: true,
                filter: 'isFile',
            },
        },


        clean : {
            warBuild : {
                src: ['war_build/**']
            },
        },
        

        webpack: {
            options: webpackConfig,
            build: {
                plugins: webpackConfig.plugins.concat(
                    new webpack.DefinePlugin({
                        "process.env": {
                            // This has effect on the react lib size
                            "NODE_ENV": JSON.stringify("production")
                        }
                    }),
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                    )
            },
        },

    };
    grunt.initConfig( taskConfig );
    grunt.registerTask( 'prepWar', ['copy:copyCssWarBuild', 'copy:copyBundleWarBuild', 'copy:copyIndexWarBuild', 'war'] ); 
    grunt.registerTask( 'build', ['webpack:build', 'copy:copyCssDist', 'copy:copyBundleDist', 'copy:copyIndexDist'] );
    grunt.registerTask( 'prepProject', ['copy:copyCss'] );
}
