<template>
  <div class="main">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../style/common";

  .main {
    min-width: 480px;
    height: $common-height;
  }
</style>
