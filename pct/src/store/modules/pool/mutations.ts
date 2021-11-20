import { ICommonData } from './state'
export const mutations = {
  setSelectedMenu: (state:ICommonData, selectedMenu: string) => {
    state.selectedMenu = selectedMenu
  }
}