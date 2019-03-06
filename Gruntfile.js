var glob = require("glob");

module.exports = function (grunt) {

    function files() {
      let entries = {};
      let files = glob.sync('*.less');

      files.forEach( function(file) {
        const dest = 'css/' + file.replace(/less$/, 'css');
        entries[dest] = files;
      });

      return entries;
    }

    grunt.initConfig({
      less: {
        production: {
          options: {
            globalVars: {
              theme: 'uv-en-GB-theme'
            }
          },
          files: files()
        }
      }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.registerTask('default', ['less']);
};
