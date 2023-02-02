<template>
  <section class="todoapp">
    <TodoHeader />
    <TodoMain />
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
    return {}
  },
  created() {
    this.$store.dispatch('getList')
  },

  methods: {},
  watch: {},
}
</script>

<style></style>
