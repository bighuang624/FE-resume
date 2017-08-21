<template>
  <section class="skills">
    <div class="section-title">
      <h3>技能列表</h3>
    </div>
    <h4>- 编程能力 -</h4>
    <div class="skills-list">
      <skill :title="'HTML5'" :value="50"></skill>
      <skill :title="'CSS3'" :value="35"></skill>
      <skill :title="'JavaScript'" :value="60"></skill>
      <skill :title="'Vue'" :value="60"></skill>
      <skill :title="'Nodejs'" :value="25"></skill>
      <skill :title="'Java'" :value="40"></skill>
      <skill :title="'MySQL'" :value="40"></skill>
      <skill :title="'算法'" :value="35"></skill>
    </div>
    <h4>- 个人素养 -</h4>
    <div class="skills-list">
      <skill :title="'鉴赏设计'" :value="40"></skill>
      <skill :title="'写作'" :value="65"></skill>
      <skill :title="'自学能力'" :value="60"></skill>
      <skill :title="'领导力'" :value="50"></skill>
    </div>
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

  .skills-list {
    display: -webkit-flex; /* Safari */
    display: flex;
    -webkit-flex-wrap: wrap; /* Safari */
    flex-wrap: wrap;
    margin: 12px 0 8px 0;
  }
</style>
