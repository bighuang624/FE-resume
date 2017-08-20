<template>
  <div class="mainBoard">
    <experience></experience>
    <skills></skills>
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
    min-width: 480px;
    height: $common-height;

    section {

      text-align: left;

      h3.section-title {
        color: $common-blue;
        @include title-underline($common-blue);
        margin-bottom: 10px;
      }

    }
  }
</style>
