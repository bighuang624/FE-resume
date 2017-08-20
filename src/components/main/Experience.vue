<template>
  <section class="experience">
    <h3 class="section-title">项目经历</h3>
    <ul>
      <li v-for="item in info">
        <div class="experience-title">
          <h4 v-text="item.name"></h4>
          <span v-text="item.time"></span>
        </div>
        <span v-text="item.intro"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'experience',
    data() {
      return {
        info: [
          {
            name: '探方网',
            time: '2016',
            intro: 'intro',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  // @import "../../assets/css/font-awesome.min.css";

  .experience {

  }

  .experience-title {
    // width: 60px;
  }
</style>
