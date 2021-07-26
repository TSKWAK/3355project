import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { placements, write } from '@popperjs/core'

Vue.use(Vuex)

const store =  new Vuex.Store({
  //state
  state: {
    // Category.vue
    category: [
      {name: 'freeboard'}, 
      {name: 'soccer'}, 
      {name: 'baseball'}, 
      {name: 'basketball'}, 
      {name: 'bollyball'}, 
      {name: 'tenis'}, 
      {name: 'golf'} 
    ],

    category2: ['freeboard', 'soccer', 'baseball', 'basketball', 'bollyball', 'tenis', 'golf'],
    
    dayCount2: [],
    popCheck: false,

    logo: 'logo',
    url: 'freeboard',

    boardId: 0,
    boardlist: [],
    bestlist: [],
    count: '',
    detail: [],
    page: 1,
    paging: 1,
    startnum: 1,
    userCheck: 'false',
    dayCount: [],
    commentCount: 0,
    categoryName: '',
    commentCheck: 0,
    blurbRandom: 1,
    MainImg: 'soccer',
    freeboardBestList: '',
    soccerBestList: '',
    baseballBestList: '',
    basketballBestList: '',
    bollyballBestList: '',
    tenisBestList: '',
    golfBestList: '',
    commentList: [],

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
    },
    
    changePage:(state, payload) => {
      state.page = ((payload.page-1)*10)
      state.paging = payload.paging
      state.startnum = (payload.page-(payload.page-1)%5)
    },

    userCheck:(state, payload) => {
      state.userCheck = payload
    },

    getDayCount:(state, payload) => {
      state.dayCount2 = payload
    },

    popCheck: (state, payload) => {
      state.popCheck = payload
    },

    setBoardId: (state, payload) => {
      state.boardId = payload
    },

    setCommentCount: (state, payload) => {
      state.commentCount = payload
    },

    getBestList: (state, payload) => {
      state.bestlist = payload
    },

    setCategoryName: (state, payload) => {
      state.categoryName = payload
    },

    setCommentCheck: (state, payload) => {
      state.commentCheck = payload
    },

    setBlurb: (state,payload) => {
      state.blurbRandom = payload
    },

    setMainImg: (state,payload) => {
      state.MainImg = payload
    },

    setMainBestList: (state, payload) => {
      state.setMainBestList = payload
    },

    setCommentList: (state, payload) => {
      state.commentList = payload
    }
  },

  //actions
  actions: {
    getData({ commit }, payload) {
      axios
        .get("/api/board/" + payload.name + "?page=" + payload.page)
        .then(res => {
          commit("boardUrl", payload.name),
          commit("getData", res.data)
          var blurb = Math.floor(Math.random() * 7)+1;
          commit("setBlurb", blurb)
          })
          .catch(err => {
              console.log(err)
          });
      },

    getCount({ commit }, payload) {
      axios
          .get("/api/board/count/"+payload)
          .then(res => {
            commit("getCount", res.data)
          })
          .catch(err => {
            console.log(err)
          });
    },

    getDetail({commit}, payload){
      console.log("this.state.boardId=",this.state.boardId)
        axios
          .get("/api/board/detail/"+payload.bId)
          .then(res => {
            this.commit("getDetail", res.data)
            this.commit("setBoardId", payload.bId)
            this.dispatch("popCheck", {bId: payload.bId, uId: payload.uId})
          })
          .catch(err => {
            console.log(err)
            console.log("payload:",payload.bId, payload.uId)
          });
      },

    getDayCount({commit}, payload){
            axios
            .all([axios.get("/api/board/dayCount?c=freeboard"), 
                  axios.get("/api/board/dayCount?c=soccer"),
                  axios.get("/api/board/dayCount?c=baseball"),
                  axios.get("/api/board/dayCount?c=basketball"),
                  axios.get("/api/board/dayCount?c=bollyball"),
                  axios.get("/api/board/dayCount?c=tenis"),
                  axios.get("/api/board/dayCount?c=golf")
          ])
            .then(
              axios.spread((res1, res2, res3, res4, res5, res6, res7) => {
              const re = [
                res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data
              ]
              commit("getDayCount", re)
            })
            )
            .catch(err => {
              console.log(err)
            })
      },


    addPop({commit}, payload){
        axios
        .get("api/board/addpop?bId="+payload.bId+"&uId="+payload.uId)
        .then(res => {
          commit("getCount", res.data)
        })
        .catch(err => {
          console.log(err)
        });
    },

    getDetail({ commit }, payload) {
      axios
        .get("/api/board/detail/" + payload.bId)
        .then(res => {
          this.dispatch("getCommentList", payload.bId)
          commit("getDetail", res.data)
          this.dispatch("popCheck", { bId: payload.bId, uId: payload.uId })
        })
        .catch(err => {
          console.log(err)
        });
    },

    getDayCount({ commit }, payload) {
      axios
        .all([axios.get("/api/board/dayCount?c=freeboard"),
        axios.get("/api/board/dayCount?c=soccer"),
        axios.get("/api/board/dayCount?c=baseball"),
        axios.get("/api/board/dayCount?c=basketball"),
        axios.get("/api/board/dayCount?c=bollyball"),
        axios.get("/api/board/dayCount?c=tenis"),
        axios.get("/api/board/dayCount?c=golf")
        ])
        .then(
          axios.spread((res1, res2, res3, res4, res5, res6, res7) => {
            const re = [
              res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data
            ]
            commit("getDayCount", re)
          }))
        .catch(err => {
          console.log(err)
        })
    },

    addPop({ commit }, payload) {
      axios
        .get("api/board/addpop?bId=" + payload.bId + "&uId=" + payload.uId)
        .then(res => {
          if (res.data = 'null' && res.data == '') {
            commit("popCheck", true)
            this.dispatch("getDetail", { bId: payload.bId, uId: payload.uId })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    deletePop({ commit }, payload) {
      axios
        .get("api/board/deletepop?bId=" + payload.bId + "&uId=" + payload.uId)
        .then(res => {
          commit("popCheck", false)
          this.dispatch("getDetail", { bId: payload.bId, uId: payload.uId })
        })
        .catch(err => {
          console.log(err)
        })
    },

    popCheck({ commit }, payload) {
      axios
        .get("api/board/popCheck?bId=" + payload.bId + "&uId=" + payload.uId)
        .then(res => {
          if (res.data = 'null' && res.data == '') {
            commit("popCheck", false)
          } else {
            commit("popCheck", true)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    getBestList({ commit }, payload) {
      axios
        .get("/api/board/bestlist?cn=" + payload)
        .then(res => {
          commit("getBestList", res.data)
          })
          .catch(err => {
              console.log(err)
          });
      },

      getMainBestList({commit}, payload){
        axios
        .all([axios.get("/api/board/bestlist?cn=freeboard"), 
              axios.get("/api/board/bestlist?cn=soccer"),
              axios.get("/api/board/bestlist?cn=baseball"),
              axios.get("/api/board/bestlist?cn=basketball"),
              axios.get("/api/board/bestlist?cn=bollyball"),
              axios.get("/api/board/bestlist?cn=tenis"),
              axios.get("/api/board/bestlist?cn=golf")
      ])
        .then(
          axios.spread((res1, res2, res3, res4, res5, res6, res7) => {
          // commit("setMainBestList", red)
          this.state.freeboardBestList = res1.data;
          this.state.soccerBestList = res2.data;
          this.state.baseballBestList = res3.data;
          this.state.basketballBestList = res4.data;
          this.state.bollyballBestList = res5.data;
          this.state.tenisBestList = res6.data;
          this.state.golfBestList = res7.data;

        })
        )
        .catch(err => {
          console.log(err)
        })
      },

      getCommentList({commit}, payload){
        axios
          .get('/api/board/comment/list?bId='+payload)
          .then(res => {
            commit('setCommentList', res.data),
            this.dispatch('commentCount', payload)
          })
          .catch(err => {
            console.log(err)
          });
      },

      commentCount({commit}, payload){
        axios
          .get('/api/board/comment/count?bId='+payload)
          .then(res => {
            commit('setCommentCount', res.data)
          })
          .catch(err => {
            console.log(err)
          });
      },

      addComment({commit}, payload){
        axios
          .get('/api/board/comment/add?c='+payload.content+'&uId='+payload.uId+'&bId='+payload.bId)
          .then(res => {
            this.dispatch('getCommentList', payload.bId);
          })
          .catch(err => {
            console.log(err)
          });
      },

      deleteComment({commit}, payload){
        axios
          .get('/api/board/comment/delete?bId='+payload.bId+'&cId='+payload.cId)
          .then(res => {
            alert('댓글이 삭제되었습니다')
            this.dispatch('getCommentList', payload.bId);
          })
          .catch(err => {
            console.log(err)
            console.log(v)
          });
      },

      boardWrite({commit}, payload){
        axios.
          post('/api/board/write',payload)
          .then(res=>{
              this.dispatch('getData', {name: payload.category, 
              page: 1})
              this.dispatch('getCount', payload.category)
              this.dispatch('getDayCount', )
              console.log(payload.user_id)
          })
          .catch(err=>{
              alert(err+' 다시 등록해주세요')
              console.log(err)
          });
        },

  }

})
    
    export default store
  
