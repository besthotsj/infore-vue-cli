import { LoginModel } from '@/model/loginModel';
export type ILoginInfo = {
  loginInfo: LoginModel
}
export const state: ILoginInfo = {
  loginInfo: {
    expireTime: '',
    token: '',
    userInfo: {
      avatar: '',
      gender: 0,
      mobile: '',
      nickname: '',
      scenicCode: '',
      userName: '',
      userSourceType: '',
    }
  }
}