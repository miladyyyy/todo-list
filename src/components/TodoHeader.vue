<template>
  <div>
    <!-- 头部部分 -->
    <header class="header">
      <transition appear name="animate__animated animate__bounce" enter-active-class="animate__flip">
        <h1>todos</h1>
      </transition>
      <input class="new-todo" placeholder="请输入任务名称" autofocus v-model.trim="newTodo" @keyup.enter="addTodo" />
    </header>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'TodoHeader',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return

      this.$store.dispatch('addTodo', {
        id: crypto.randomUUID(),
        name: this.newTodo,
        isDone: false,
      })
      this.newTodo = ''
    },
  },
}
</script>

<style></style>
