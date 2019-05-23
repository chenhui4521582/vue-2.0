import Jsonp from 'jsonp'

function $Jsonp (url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + query(data)
  return new Promise((resolve, reject) => {
    Jsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function query (data) {
  let url = ''
  for (var i in data) {
    let value = data[i] ? data[i] : '';
    url += `&${i}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}

export default $Jsonp