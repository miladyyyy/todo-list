<template>
  <div>
    <!-- 头部部分 -->
    <header class="header">
      <transition appear name="animate__animated animate__bounce" enter-active-class="animate__flip">
        <h1>todos</h1>
      </transition>
      <input class="new-todo" placeholder="请输入任务名称" autofocus v-model.trim="name" @keyup.enter="submit" />
    </header>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'TodoHeader',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    submit() {
      if (!this.name) return alert('非法输入！')
      this.$emit('submit', this.name)
      this.name = ''
    },
  },
}
</script>

<style></style>
