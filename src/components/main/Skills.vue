<template>
  <section class="skills">
    <div class="section-title">
      <h3>技能列表</h3>
    </div>
    <h4>- 编程能力 -</h4>
    <div class="skills-list">
      <skill v-for="item in programming" :title="item.title" :value="item.value" :key="item.title"></skill>
    </div>
    <h4>- 个人素养 -</h4>
    <div class="skills-list">
      <skill v-for="item in quality" :title="item.title" :value="item.value" :key="item.title"></skill>
    </div>
  </section>
</template>

<script>
  import Skill from './skills/Skill';
  import getSkills from '../../api/skills';

  export default {
    name: 'skills',
    components: {
      Skill,
    },
    data() {
      return {
        programming: [],
        quality: [],
      };
    },
    created() {
      getSkills().then((response) => {
        this.programming = response.programming;
        this.quality = response.quality;
      });
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
