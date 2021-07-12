import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //state
  state: {
    // Category.vue
    category: [
      {name: 'freeboard'}, {name: 'soccer'}, {name: 'baseball'}, {name: 'basketball'}, 
      {name: 'bollyball'}, {name: 'tenis'}, {name: 'golf'} 
    ],
    url: 'freeboard',
    boardlist: [0],
    count: '',
    detail: [0],
  },

  //mutations
  mutations: {
    boardUrl:(state, payload) => {
      state.url = payload
    },
  
    getData:(state, payload) => {
      state.boardlist = payload
    },

    getCount:(state, payload) => {
      state.count = payload
    },

    getDetail:(state, payload) => {
      state.detail = payload
    }
  },

  //actions
  actions: {
    getData({commit}, payload){
      axios
          .get("/api/board/"+payload.name+"?page="+payload.page)
          .then(res => {
            commit("boardUrl", payload.name),
            commit("getData", res.data)
            console.log("getList: ",res)
          })
          .catch(err => {
              console.log(err)
          });
      },

    getCount({commit}, payload){
      axios
          .get("/api/board/count/"+payload)
          .then(res => {
            commit("getCount", res.data)
            console.log("getCount: ",res)
          })
          .catch(err => {
            console.log(err)
          });
    },

    getDetail({commit}, payload){
      axios
          .get("/api/board/detail/"+payload)
          .then(res => {
            commit("getDetail", res.data)
            console.log(res)
            console.log("getDetail data: ", payload)
          })
          .catch(err => {
            console.log(err)
            console.log("getDetail error: ", payload)
          });
    },
    test({ commit }, payload){
            axios.post('https://jsonplaceholder.typicode.com/tests',$store.state.account)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            }).finally(()=>{
                //ddd
            });
    },

  },

  getters: {

  }
  
})
