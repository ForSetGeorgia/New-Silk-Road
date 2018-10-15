// read in the json file and return the data

module.exports = {
  getData: function() {
    const fs = require("fs")
    const path = require('path')
    const jsonPath = path.join(__dirname, '..', 'src', 'env_urls.json')
    const contents = fs.readFileSync(jsonPath)
    return JSON.parse(contents)
  }
}