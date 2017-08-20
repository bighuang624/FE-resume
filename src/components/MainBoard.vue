<template>
  <div class="mainBoard">
    <div class="inner">
      <experience></experience>
      <skills></skills>
    </div>
  </div>
</template>

<script>
  import Experience from './main/Experience';
  import Skills from './main/Skills';

  export default {
    name: 'mainBoard',
    components: {
      Experience,
      Skills,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../style/common";

  .mainBoard {
    width: 100%;
    height: $common-height;
    padding: 10px 40px 0 40px;
    float: left;

    .inner {
      margin-left: 288px;
      min-width: 480px;
    }

  }

  .skills, .experience {

    text-align: left;

    .section-title {

      position: relative;
      width: 80px;
      margin: 38px 0 20px 0;
      @include title-absolute-underline($common-blue);

      h3 {
        color: $common-blue;
      }
    }

  }
</style>
