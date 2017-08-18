<template>
  <div class="leftNav">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'leftNav',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../style/common";

  .leftNav {
    width: 288px;
    height: $common-height;
    float: left;
    background-color: $common-blue;

  }
</style>
