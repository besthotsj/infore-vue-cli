import { LoginModel } from '@/model/loginModel';
import { ILoginInfo } from './state';
export const mutations = {
  setLoginInfo: (state: ILoginInfo, loginInfo: LoginModel) => {
    state.loginInfo = loginInfo
  }
}