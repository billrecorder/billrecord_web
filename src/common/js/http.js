import axios from 'axios'

const BASE_URL = '/'
const BASE_URL_MOCK = '/mock/'

/**
 * 0:关闭mock，个别开关优先
 * 1:开启mock，个别开关优先
 * true:全局开启mock，忽视个别开关
 * false:全局关闭mock，忽略个别开关
 */
const IFMOCK = 1

const instance = axios.create({})

/** 模拟耗时请求 */
const fakeLongtime = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time * 1000)
  })
}

const ajax = (options) => {
  const ifMock = typeof IFMOCK === 'number'
    ? (
      options.ifMock === undefined
        ? (IFMOCK && true) : options.ifMock
    ) : IFMOCK
  const realOptions = {
    ...options,
    baseURL: options.baseURL
      ? options.baseURL : (
        ifMock
          ? BASE_URL_MOCK : BASE_URL
      ),
  }
  return new Promise((resolve, reject) => {
    Promise.all([
      fakeLongtime(options.fakeTime || 0),
      instance(realOptions),
    ]).then(allRes => {
      const res = allRes[1]
      if (
        res.status &&
        res.status === 200
      ) {
        resolve({
          success: true,
        })
      } else {
        resolve({
          success: false,
        })
      }
    }).catch(err => {
      console.log(err)
      resolve({
        success: false,
      })
    })
  })
}

export default ajax
