import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
  },

  actions: {
    async getList(context) {
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:3000/todos',
      })
      context.state.list = data
    },

    async addTodo(state, payload) {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/todos',
        data: {
          id: crypto.randomUUID(),
          name: payload,
          isDone: false,
        },
      })
    },

    async deletTodo(state, payload) {
      await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/todos/' + payload,
      })
    },
  },

  getters: {
    leftCount: state =>
      state.list.reduce((pre, cur) => pre + (cur.isDone ? 1 : 0), 0),
  },
})
