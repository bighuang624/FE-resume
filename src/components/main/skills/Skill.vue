<template>
  <div class="skill">
    <div class="skill-title" v-text="title"></div>
    <span class="skill-line">
      <span class="skill-value" :style="'width: ' + value + '%'"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    props: [
      'title',
      'value',
    ],
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../../style/common";

  skill {
    display: inline-block;
  }

  .skill-title {
    width: 85px;
    display: inline-block;
  }

  .skill-line {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 8px;
    border-radius: 4px;
    background-color: $dark-blue;

    .skill-value {
      content: "";
      position: absolute;
      height: 100%;
      border-radius: 4px;
      background: $common-blue none repeat scroll 0 0;
    }
  }
</style>
