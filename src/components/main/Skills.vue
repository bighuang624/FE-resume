<template>
  <section class="skills">
    <h3 class="section-title">技能列表</h3>
    <ul>
      <li v-for="item in info">
        <span class="skill-title" v-text="item.title"></span>
        <span class="skill-line">
          <span class="skill-value" :style="'width: ' + item.value + '%'"></span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'skills',
    data() {
      return {
        info: [
          {
            title: 'Node.js',
            value: 30,
          },
          {
            title: 'JavaScript',
            value: 60,
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  // @import "../../assets/css/font-awesome.min.css";

  .skills {



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
