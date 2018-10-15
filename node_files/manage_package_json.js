// update a key in the package.json file and then re-write the file

module.exports = {
  updateKey: function(key, value) {
    const fs = require("fs-extra")
    const path = require('path')

    // read in the file
    const jsonPath = path.join(__dirname, '..', 'package.json')
    const contents = fs.readFileSync(jsonPath)
    let json = JSON.parse(contents)

    // update the value
    json[key] = value

    // write the file
    fs.writeJsonSync(jsonPath, json)
  }
}