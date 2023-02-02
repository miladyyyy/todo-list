<template>
  <section class="todoapp">
    <TodoHeader @submit="submit" />
    <TodoMain :list="list" @del="del" @changeIsDone="changeIsDone" :type="type" @checkAll="checkAll" />
    <TodoFooter :list="list" @clearDone="clearDone" v-model="type" />
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data() {
    return {
      // list: [
      //   { id: 1, name: '吃饭', isDone: true },
      //   { id: 2, name: '睡觉', isDone: false },
      //   { id: 3, name: '打豆豆', isDone: true },
      // ],
      list: JSON.parse(localStorage.getItem('list')) || [],
      type: 'all',
    }
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => id !== item.id)
    },
    changeIsDone(id) {
      this.list.forEach(item => {
        if (item.id === id) item.isDone = !item.isDone
      })
    },
    submit(name) {
      this.list.unshift({ id: crypto.randomUUID(), name, isDone: false })
    },
    clearDone() {
      this.list = this.list.filter(item => !item.isDone)
    },
    // changeType(type) {
    //   this.type = type
    // },
    checkAll(status) {
      this.list.forEach(item => (item.isDone = status))
    },
  },
  watch: {
    list: {
      handler() {
        localStorage.setItem('list', JSON.stringify(this.list))
      },
      deep: true,
    },
  },
}
</script>

<style></style>
