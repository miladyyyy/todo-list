import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    filterType: 'all',
  },
  mutations: {
    updateList(state, payload) {
      state.list = payload
    },

    updateAdd(state, payload) {
      state.list.push(payload)
    },

    updateDelet(state, payload) {
      state.list = state.list.filter(item => item.id !== payload)
    },

    updateClear(state) {
      state.list = state.list.filter(item => !item.isDone)
    },

    changeType(state, payload) {
      state.filterType = payload
    },
  },

  actions: {
    async getList(context) {
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:3000/todos',
      })

      context.commit('updateList', data)
    },

    async addTodo(context, payload) {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/todos',
        data: payload,
      })
      context.commit('updateAdd', payload)
    },

    async deletTodo(context, payload) {
      await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/todos/' + payload,
      })
      context.commit('updateDelet', payload)
    },

    clearAllDone(context) {
      context.state.list.forEach(async item => {
        if (item.isDone) {
          await axios({
            method: 'DELETE',
            url: 'http://localhost:3000/todos/' + item.id,
          })
        }
        context.commit('updateClear')
      })
    },

    async changeDone(context, payload) {
      await axios({
        method: 'PATCH',
        url: 'http://localhost:3000/todos/' + payload.id,
        data: { isDone: payload.val },
      })
    },
  },

  getters: {
    leftCount: state => state.list.reduce((pre, cur) => pre + (cur.isDone ? 0 : 1), 0),
  },
})
