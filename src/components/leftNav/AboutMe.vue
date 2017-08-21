<template>
  <section class="aboutMe">
    <h3 class="section-title">关于我</h3>
    <ul>
      <li v-for="item in info1">
        <i :class="item.icon"></i>
        <span v-text="item.text"></span>
      </li>
      <li v-for="item in info2">
        <i :class="item.icon"></i>
        <a v-text="item.text" :href="item.address"></a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'aboutMe',
    data() {
      return {
        info1: [
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
        ],
        info2: [
          {
            icon: 'fa fa-rss',
            title: '个人博客',
            text: 'kyonhuang.top',
            address: 'http://kyonhuang.top/',
          },
          {
            icon: 'fa fa-github',
            title: 'github',
            text: '@bighuang624',
            address: 'https://github.com/bighuang624',
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
    a:hover {
      color: $common-white;
    }
  }
</style>
