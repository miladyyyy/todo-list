<template>
  <div>
    <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isCheckAll" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
        <li :class="{ completed: item.isDone }" v-for="item in showList" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox" :checked="item.isDone" @change="changeIsDone(item.id)" />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="del(item.id)"></button>
          </div>
        </li>
        <!-- <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>行万里路</label>
            <button class="destroy"></button>
          </div>
        </li> -->
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodoMain',
  props: {
    list: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'all',
    },
  },
  methods: {
    del(id) {
      this.$emit('del', id)
    },
    changeIsDone(id) {
      this.$emit('changeIsDone', id)
    },
  },
  computed: {
    showList() {
      switch (this.type) {
        case 'all':
          return this.list
        case 'active':
          return this.list.filter(item => !item.isDone)
        case 'completed':
          return this.list.filter(item => item.isDone)
      }
    },
    isCheckAll: {
      get() {
        return this.list.every(item => item.isDone)
      },
      set(value) {
        this.$emit('checkAll', value)
      },
    },
  },
}
</script>

<style></style>
