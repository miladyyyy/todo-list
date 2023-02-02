<template>
  <div>
    <!-- 底部部分 -->
    <footer class="footer">
      <span class="todo-count"
        ><strong>{{ $store.getters.leftCount }}</strong
        >剩余</span
      >
      <ul class="filters">
        <li>
          <a href="#/" :class="{ selected: filterType === 'all' }" @click.prevent="changeType('all')">全部</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: filterType === 'active' }" @click.prevent="changeType('active')">进行中</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: filterType === 'completed' }" @click.prevent="changeType('completed')">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="$store.dispatch('clearAllDone')">清除已完成</button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TodoFooter',

  computed: {
    ...mapState(['filterType']),
  },
  methods: {
    ...mapMutations(['changeType']),
  },
}
</script>

<style></style>
