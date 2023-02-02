<template>
  <div>
    <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->

        <li :class="{ completed: item.isDone }" v-for="item in showList" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.isDone" @change="changeDone($event, item.id)" />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="deletTodo(item.id)"></button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TodoMain',
  data() {
    return {}
  },
  computed: {
    ...mapState(['list', 'filterType']),

    showList() {
      switch (this.filterType) {
        case 'all':
          return this.list

        case 'active':
          return this.list.filter(item => !item.isDone)

        case 'completed':
          return this.list.filter(item => item.isDone)
      }
    },
  },

  methods: {
    deletTodo(id) {
      this.$store.dispatch('deletTodo', id)
    },
    changeDone(e, id) {
      this.$store.dispatch('changeDone', {
        id,
        val: e.target.checked,
      })
    },
  },
}
</script>

<style></style>
