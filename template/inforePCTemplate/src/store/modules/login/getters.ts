import { ILoginInfo } from './state'
export const getters = {
  token: (state: ILoginInfo) => state.loginInfo.token,
  userInfo: (state: ILoginInfo) => state.loginInfo.userInfo
}