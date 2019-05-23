import Axios from 'axios'

Axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return error
})

Axios.interceptors.response.use(function (res) {
  let { data = {}, code = '' } = res.data
  if (code == 0) {
    return data
  } else {
    return res
  }
}, error => {
  return error
})

export default Axios
