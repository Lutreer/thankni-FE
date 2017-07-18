import * as types from '../mutation-type'
import { loginService } from '../../services/user'

const moduleA = {
  state: {
    user: '',
    status: '',
    code: '',
    token: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  mutations: {
    [types.USER.LOGIN](state, loginInfo){

    }
  },
  actions: {
    login({ commit }, loginInfo){
      return new Promise((resolve, reject) => {
        loginService(loginInfo).then(response => {
          commit(types.USER.LOGIN, loginInfo)
          resolve()
        }).catch(error => {
            reject(error)
        })
      })
    }

  },
  getters: {

  }
}
