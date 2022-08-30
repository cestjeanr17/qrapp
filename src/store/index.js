import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    user: null
  },
  getters: {
    userAuth(state){
      return !!state.user
    }
  },
  mutations: {
    login(state, payload){
      state.user = payload
    },
    logout(state){
      state.user = null
    },
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async loadLocalStorage({commit}, state){
      if (localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      } else {
        return commit('setUser', null)
      }
    },
    async loginUser({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbrgTdpevozRGe-0lhVulUvREZXMjQeLo',{
        method: 'POST',
        body: JSON.stringify({
          email: usuario.email,
          password: usuario.password,
          returnSecureToken: true 
        })
      }) 
      const userDB = await res.json();
      console.log(userDB);
      if (userDB.error) {
        return console.log(userDB.error);
      }
      commit('login', userDB)
      console.log(`Bienvenido, ${userDB.email}`);
      router.push('/')
      localStorage.setItem('usuario', JSON.stringify(userDB))

      } catch (error) {
        console.log(error);
      }
    },
    logoutUser({commit}){
      commit('logout')
      router.push('/login')
      alert("Sesion Cerrada")
      localStorage.removeItem('usuario')
    }
  },
  modules: {
  }
})
