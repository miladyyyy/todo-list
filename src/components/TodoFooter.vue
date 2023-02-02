<template>
  <div>
    <!-- 底部部分 -->
    <footer class="footer" v-show="list.length" appear>
      <span class="todo-count"
        ><strong>{{ leftTodos }}</strong
        >剩余</span
      >
      <ul class="filters">
        <li>
          <a :class="{ selected: value === 'all' }" href="#/" @click.prevent="changeType('all')">全部</a>
        </li>
        <li>
          <a :class="{ selected: value === 'active' }" href="#/active" @click.prevent="changeType('active')">进行中</a>
        </li>
        <li>
          <a :class="{ selected: value === 'completed' }" href="#/completed" @click.prevent="changeType('completed')">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" v-show="isShowClearDone" @click="clearDone">清除已完成</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    list: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    leftTodos() {
      return this.list.reduce((prev, curr) => prev + (curr.isDone ? 0 : 1), 0)
    },
    isShowClearDone() {
      return this.list.some(item => item.isDone)
    },
  },
  methods: {
    clearDone() {
      this.$emit('clearDone')
    },
    changeType(type) {
      this.$emit('input', type)
    },
  },
}
</script>

<style></style>
