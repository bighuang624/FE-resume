<template>
  <section class="skills">
    <h3 class="section-title">技能列表</h3>
    <ul>
      <li v-for="item in info">
        <span v-text="item.title"></span>
        <span class="skill">
          <span class="skill-value"></span>
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
            value: 0.3,
          },
          {
            title: 'JavaScript',
            value: 0.5,
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

  .skill {
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
      width: 30%;
      border-radius: 4px;
      background: $common-blue none repeat scroll 0 0;
    }
  }
</style>
