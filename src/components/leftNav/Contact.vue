<template>
  <section class="contact">
    <h3 class="section-title">联系方式</h3>
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
    name: 'contact',
    data() {
      return {
        info: [
          {
            icon: 'fa fa-envelope',
            title: '邮箱',
            text: 'kyonhuang@qq.com',
          },
//          {
//            icon: 'fa fa-qq',
//            title: 'QQ',
//            text: '245****13',
//          },
//          {
//            icon: 'fa fa-weibo',
//            title: '微博',
//            text: '@大黄菌今天也在摸鱼',
//          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  @import "../../assets/css/font-awesome.min.css";

  .contact {

  }
</style>
