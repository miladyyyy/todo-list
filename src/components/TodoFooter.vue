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
          <a href="#/">全部</a>
        </li>
        <li>
          <a href="#/active">进行中</a>
        </li>
        <li>
          <a href="#/completed">已完成</a>
        </li>
      </ul>
      <button class="clear-completed">清除已完成</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',

  computed: {},
  methods: {},
}
</script>

<style></style>
