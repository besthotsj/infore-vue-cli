import { ILoginInfo } from "./modules/login/state";
import { ICommonData } from "./modules/pool/state"
export interface IStore {
  pool: ICommonData
  login: ILoginInfo
}