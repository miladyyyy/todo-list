<template>
  <div>
    <!-- 头部部分 -->
    <header class="header">
      <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__flip"
      >
        <h1>todos</h1>
      </transition>
      <input
        class="new-todo"
        placeholder="请输入任务名称"
        autofocus
        v-model.trim="newTodo"
        @keyup.enter="addTodo"
      />
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
      this.$store.dispatch('addTodo', this.newTodo)
      this.$store.dispatch('getList')
    },
  },
}
</script>

<style></style>
