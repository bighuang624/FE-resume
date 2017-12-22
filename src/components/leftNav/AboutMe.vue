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
            text: '现居 武汉',
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

  .hexagon {

    $hexagon-width: 32px;
    $hexagon-bgcolor: $common-white;


    width: $hexagon-width;
    height: .55 * $hexagon-width;
    background: $hexagon-bgcolor;
    position: relative;
    text-align: center;
    display: inline-block;

    i {
      position: absolute;
      color: $common-blue;
      left: 5px;
      top: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: -.25 * $hexagon-width;
      left: 0;
      width: 0;
      height: 0;
      border-left: .5 * $hexagon-width solid transparent;
      border-right: .5 * $hexagon-width solid transparent;
      border-bottom: .25 * $hexagon-width solid $hexagon-bgcolor;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -.25 * $hexagon-width;
      left: 0;
      width: 0;
      height: 0;
      border-left: .5 * $hexagon-width solid transparent;
      border-right: .5 * $hexagon-width solid transparent;
      border-top: .25 * $hexagon-width solid $hexagon-bgcolor;
    }
  }
</style>
