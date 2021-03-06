import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import Axios from 'common/js/axios'
class Api {
  getRecommond () {
    const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams, { 'platform': 'h5', 'uin': 461822621, 'needNewCode': 1 })
    return jsonp(url, data, options)
  }
  getDiscList () {
    const url = '/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
    return Axios.get(url, { params: data }).then(res => {
      return Promise.resolve(res)
    })
  }
}
export default new Api()