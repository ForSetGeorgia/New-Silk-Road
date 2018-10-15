// be able to build for an environment
//   - set the urls in index.jsx and package.json via env variables
//   - after build, copy from build to deploy/env folder
// - after build all, run ruby script to move *.html to */index.html

// NOTES
// - call this with env argument to indicate which environment should be used
//   - ex: node build_for_env.js --env=staging
//         npm run build -- --env=staging
// - if env does not exist or is not provided, then staging is used as default
// - setting PUBLIC_URL env variable does not work with build; the homepage key in package.json must be set
//   - so for each locale, the homepage value is updated and then build is run.

console.log("BUILD START")

const fs = require('fs-extra')
const path = require('path')
const argv = require('optimist').argv
const exec = require('child_process').exec
const execs = require('child_process').execSync
const available_envs = ['staging', 'production']
const default_env = 'staging'
const envUrlData = require('./env_url_data')
const managePackageJson = require('./manage_package_json')
const processDeployFiles = require('./process_deploy_files')

const envURLs = envUrlData.getData()
const env = argv.env && available_envs.indexOf(argv.env) > -1 ? argv.env : default_env
console.log('building for ' + env + ' environment')

function puts(error, stdout, stderr) {
  console.log(stdout)
  console.log('------------')
  console.log(stderr)
}

// make a copy of package.json so we can restore it after building is done
const packagePath = path.join(__dirname, '..', 'package.json')
const packageOrigPath = path.join(__dirname, '..', 'package_orig.json')
fs.copySync(packagePath, packageOrigPath)

console.log('=====================')
// get the URLs based on the environment
let baseUrl = envURLs[env].base_url
let basePath = envURLs[env].base_path
let buildPath = path.join(__dirname, '..', 'build')
let deployPath = path.join(__dirname, '..', 'deploy', env, basePath.replace(/^/, ''))

// update hompage value in package.json
managePackageJson.updateKey('homepage', baseUrl + basePath)

// build the project
execs(`REACT_APP_ENV=${env} REACT_APP_BASENAME=${basePath} npm run build-react`, puts)

// clear files in deploy folder
// - if deploy folder not exist, this will create it
fs.emptyDirSync(deployPath)

// copy build files to deploy folder
console.log('- copying build files to deploy folder')
fs.copySync(buildPath, deployPath)


console.log('=====================')

// move all *.html files to */index.html files
console.log('creating index files')
processDeployFiles.createIndexFiles()

// replace package.json with original file
fs.moveSync(packageOrigPath, packagePath, { overwrite: true })

console.log("BUILD DONE")



