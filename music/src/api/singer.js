import Jsonp from 'common/js/jsonp'
import { commonParams, options } from './config';

class Api {
  getSinger () {
    let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    let data = Object.assign({}, commonParams, {
      channel: 'singer',
      page: 'list',
      key: 'all_all_all',
      pagesize: 100,
      pagenum: 1,
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq'
    })
    return Jsonp(url, data, options)
  }
  getSingerDetail (singerId) {
    console.log(singerId)
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    const data = Object.assign({}, commonParams, {
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq',
      order: 'listen',
      begin: 0,
      num: 80,
      songstatus: 1,
      singermid: singerId
    })
    return Jsonp(url, data, options)
  }
}

export default new Api()