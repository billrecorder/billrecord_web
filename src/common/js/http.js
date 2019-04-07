import axios from 'axios'
import {
  Message,
} from 'iview'

const BASE_URL = '/'
const BASE_URL_MOCK = 'https://mockapi.eolinker.com/v25NaHSf8488151eec4caf6afe040d778e1d925a302896a/'

const CUCCESS_CODE = 0

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
  // headers处理
  let headerBase = {
    // 'Access-Control-Allow-Origin': '*',
  }
  switch (options.contentType) {
    case 'form':
      headerBase = Object.assign(headerBase, {
        'Content-Type': 'multipart/form-data',
      })
      break
    default:
      headerBase = Object.assign(headerBase, {
        'Content-Type': 'application/json',
      })
      break
  }
  const realOptions = {
    ...options,
    baseURL: options.baseURL
      ? options.baseURL : (
        ifMock
          ? BASE_URL_MOCK : BASE_URL
      ),
    headers: Object.assign(
      headerBase,
      options.headers || {},
    ),
    // withCredentials: true,
  }
  return new Promise((resolve, reject) => {
    Promise.all([
      fakeLongtime(options.fakeTime || 0),
      instance(realOptions),
    ]).then(allRes => {
      const res = allRes[1]
      if (
        res.status &&
        res.status === 200 &&
        res.data.code === CUCCESS_CODE
      ) {
        resolve({
          success: true,
          code: res.data.code,
          data: res.data.data,
          message: res.data.message,
        })
      } else {
        resolve({
          success: false,
          code: res.data.code,
          data: res.data.data,
          message: res.data.message,
        })
      }
    }).catch(err => {
      console.log(err)
      Message.error(err.message)
      resolve({
        success: false,
        code: err.data.code,
        message: err.message,
      })
    })
  })
}

export default ajax
