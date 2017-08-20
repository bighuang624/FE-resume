<template>
  <section class="aboutMe">
    <h3 class="section-title">关于我</h3>
    <ul>
      <li v-for="item in info">
        <i :class="item.icon"></i>
        <span v-text="item.text"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'aboutMe',
    data() {
      return {
        info: [
          {
            icon: 'fa fa-graduation-cap',
            title: '教育背景',
            text: '武汉大学软件工程2015级',
          },
          {
            icon: 'fa fa-map-marker',
            title: '城市',
            text: '武汉',
          },
          {
            icon: 'fa fa-rss',
            title: '个人博客',
            text: 'kyonhuang.top',
          },
          {
            icon: 'fa fa-github',
            title: 'github',
            text: '@bighuang624',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  @import "../../assets/css/font-awesome.min.css";

  .aboutMe {

  }
</style>
