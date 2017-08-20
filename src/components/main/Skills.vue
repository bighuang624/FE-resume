<template>
  <section class="skills">
    <h3 class="section-title">技能列表</h3>
    <skill :title="'Node.js'" :value="30"></skill>
    <skill :title="'JavaScript'" :value="55"></skill>
  </section>
</template>

<script>
  import Skill from './skills/Skill';

  export default {
    name: 'skills',
    components: {
      Skill,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  // @import "../../assets/css/font-awesome.min.css";

  .skills {



  }
</style>
