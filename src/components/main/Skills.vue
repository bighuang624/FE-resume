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

  export default {
    name: 'skills',
    components: {
      Skill,
    },
    data() {
      return {
        programming: [
          {
            title: 'HTML5',
            value: 50,
          },
          {
            title: 'CSS3',
            value: 35,
          },
          {
            title: 'JavaScript',
            value: 55,
          },
          {
            title: 'Vue',
            value: 50,
          },
          {
            title: 'Nodejs',
            value: 20,
          },
          {
            title: 'Java',
            value: 35,
          },
          {
            title: 'MySQL',
            value: 25,
          },
          {
            title: '算法',
            value: 30,
          },
        ],
        quality: [
          {
            title: '鉴赏设计',
            value: 40,
          },
          {
            title: '写作',
            value: 65,
          },
          {
            title: '自学能力',
            value: 60,
          },
          {
            title: '领导力',
            value: 50,
          },
        ],
      };
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
