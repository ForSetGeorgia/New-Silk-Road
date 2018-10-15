// get the app url for the environment

import envURLs from '../env_urls'

const getEnvAppUrl = (env) => {
  let url = null

  if (env && envURLs){
    url = envURLs[env].base_url + envURLs[env].base_path
  }

  return url
}

export default getEnvAppUrl;
