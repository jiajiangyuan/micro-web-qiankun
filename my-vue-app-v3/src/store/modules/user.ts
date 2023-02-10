const state = {
  token: ''
}

const mutations = {
  SET_TOKEN: (state: any, token: any) => {
    state.token = token
  },
}

const actions = {
  // 登录
  login({ commit }: any, userInfo: any) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', userInfo.accessToken)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
