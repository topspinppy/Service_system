import axios from 'axios'

export const fetch = (method, url, data = null) => {
  return axios({
    method,
    url,
    data,
  })
}
