// get the base url for the environment

import envURLs from '../env_urls'

const getEnvBaseUrl = (env) => {
  let url = null

  if (env && envURLs){
    url = envURLs[env].base_url
  }

  return url
}

export default getEnvBaseUrl;
