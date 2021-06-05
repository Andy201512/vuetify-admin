const user = {
  state: {
    username: '',
  },
  
  mutations: {
    SET_NAME: (state, { username }) => {
      state.username = username
    }
  }
}

export default user