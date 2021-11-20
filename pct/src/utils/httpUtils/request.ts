import axios, {
  AxiosRequestConfig,
  CancelTokenStatic,
  Canceler,
  AxiosResponse
} from 'axios'
import { getToken } from '../auth'
import defaultConfig from '@/configs'
// import { message } from 'ant-design-vue'
import { ResponseInter } from '@/model/baseModel'
const timeout = 50
const pending: Array<{
  url: string
  cancel: any
}> = []
const CancelToken: CancelTokenStatic = axios.CancelToken

const service = axios.create({
  baseURL: defaultConfig.zhtApiUrl,
  timeout: timeout * 1000
})

// request拦截器
service.interceptors.request.use(
  (config: any) => {
    removePending(config)
    config.CancelToken = new CancelToken((c: Canceler) => {
      pending.push({
        url: `${config.url}/${JSON.stringify(config.data)}&request_type=${
          config.method
        }`,
        cancel: c
      })
    })
    if (!config?.url?.includes('/noauth')) {
      const TOKEN = getToken()
      if (TOKEN) {
        config.headers.Authorization = TOKEN
      }
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    responseLog(response)
    removePending(response.config)
    const { url: apiUrl } = response.config
    const { status, statusText, data } = response
    if (status === 200) {
      return data
    } else {
      // 报错
      //   message.error(`接口出错了! status: ${status} - statusText: ${statusText}`)
      return Promise.reject(new Error(statusText))
    }
  },
  error => {
    if (error.response) {
      const { status, statusText, data } = error.response
      console.log('data: ', data)
      //   message.error(`status ${status}-${data.message || statusText}`)
    } else {
      //   message.error(`禁止访问! 错误信息： ${error}`)
    }
  }
)

const removePending = (config: any): void => {
  for (const p in pending) {
    const item: any = p
    const list: any = pending[p]
    if (
      list.url ===
      `${config.url}/${JSON.stringify(config.data)}&request_type=${
        config.method
      }`
    ) {
      list.cancel()
      console.log('=====', pending)
      pending.splice(item, 1)
      console.log('+++++', pending)
    }
  }
}

const responseLog = (response: AxiosResponse): void => {
  if (process.env.NODE_ENV === 'development') {
    const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`
    console.log(
      '%c┍------------------------------------------------------------------┑',
      `color:${randomColor};`
    )
    console.log('| 请求地址：', response.config.url)
    console.log('| 请求方式：', response.config.method)
    console.log('| 请求参数：', response.config.data || response.config.params)
    console.log('| 返回数据：', response.data)
    console.log(
      '%c┕------------------------------------------------------------------┙',
      `color:${randomColor};`
    )
  }
}

const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<ResponseInter<T>> => {
  return new Promise((resolve, reject) => {
    service
      .request<T, ResponseInter<T>>(config)
      .then((res: ResponseInter<T>) => {
        resolve(res)
      })
      .catch((err: Error) => {
        reject(err)
      })
  })
}

export default request
