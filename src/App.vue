<template>
  <section class="todoapp">
    <TodoHeader />
    <TodoMain :list="list" />
    <TodoFooter />
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
      list: [
        { id: 1, name: '吃饭', isDone: true },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '打豆豆', isDone: true },
      ],
    }
  },
}
</script>

<style></style>
