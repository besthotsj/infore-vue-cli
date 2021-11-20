import { LoginModel } from '@/model/loginModel'
import Cookies from 'js-cookie'

const TokenKey = 'Ticket-Self-Service-Token'
const InfoKey = 'Ticket-Self-Service-Info'

export const getToken = () => Cookies.get(TokenKey)
export const setToken = (token: string, expireTime: string) =>
  Cookies.set(TokenKey, token, {
    expires: new Date(expireTime)
  })
export const removeToken = () => Cookies.remove(TokenKey)

export const getLoginInfo = () => Cookies.get(InfoKey)
export const setLoginInfo = (info: LoginModel) =>
  Cookies.set(InfoKey, JSON.stringify(info), {
    expires: new Date(info.expireTime)
  })
export const removeLoginInfo = () => Cookies.remove(InfoKey)
