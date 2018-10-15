
module.exports = {
  createIndexFiles: function() {
    // move all *.html pages to */index.html so that browsers will automatically
    // find these files without having to tweak the server config
    // to look for /a is /a.html

    const fs = require("fs-extra")
    const path = require('path')
    const glob = require('glob')

    const options = {
      cwd: 'deploy'
    }

    glob('**/*.html', options, function (err, files) {
      if (err) {
        console.log('===========HTML GLOB ERROR===============')
        console.log(err)

      } else {

        for (let i=0; i<files.length; i++){
          let file_path = files[i]
          let file = file_path.split('/').slice(-1)[0]
          if (file !== 'index.html' && file !== '200.html'){
            let file_name = file.replace('.html', '')
            let path_without_file = file_path.replace(file, '')
            let new_path = path.join(__dirname, '..', 'deploy', path_without_file + '/' + file_name)
            let new_path_with_index = path.join(__dirname, '..', 'deploy', path_without_file + '/' + file_name, 'index.html')
            let old_path = path.join(__dirname, '..', 'deploy', file_path)

            // make the new directory
            fs.ensureDirSync(new_path)

            // move the file and rename as index.html
            fs.moveSync(old_path, new_path_with_index, { overwrite: true })
          }
        }
      }
    })
  }
}