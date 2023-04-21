export const getters = {
  isLoggedIn(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}
export const actions = {
  // async nuxtServerInit({ dispatch, commit, state }) {
  //   console.log('ser init', state.auth)
  //   const { accessToken, refreshToken } = state.auth
  //
  //   if (accessToken && refreshToken) {
  //     try {
  //       // refresh the access token
  //       await dispatch('auth/refresh')
  //     } catch (e) {
  //       // catch any errors and automatically logout the user
  //       await dispatch('auth/logout')
  //     }
  //   }
  // },
}
