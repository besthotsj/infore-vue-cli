export interface UserInfo {
  avatar: string
  gender: number
  mobile: string
  nickname: string
  scenicCode: string
  userName: string
  userSourceType: string
}
export interface LoginModel{
    expireTime: string
    token: string
    userInfo: UserInfo
}