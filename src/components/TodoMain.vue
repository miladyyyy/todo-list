<template>
  <div>
    <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->

        <li v-for="item in $store.state.list" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.isDone" />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="deletTodo(item.id)"></button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodoMain',
  data() {
    return {}
  },

  methods: {
    deletTodo(id) {
      this.$store.dispatch('deletTodo', id)
      this.$store.dispatch('getList')
    },
  },
}
</script>

<style></style>
