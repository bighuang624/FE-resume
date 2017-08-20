<template>
  <div class="leftNav">
    <img id="avatar" src="../assets/avatar.jpg">
    <h1>KYON HUANG</h1>
    <h3>WEB DEVELOPER</h3>
    <aboutMe></aboutMe>
    <contact></contact>
  </div>
</template>

<script>
  import AboutMe from './leftNav/AboutMe';
  import Contact from './leftNav/Contact';

  export default {
    name: 'leftNav',
    components: {
      AboutMe,
      Contact,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../style/common";

  .leftNav {
    width: 288px;
    height: $common-height;
    float: left;
    background-color: $common-blue;

    h1 {
      color: $common-white;
      margin-top: 10px;
    }

    h3 {
      // font-weight: normal;
    }

    section {

      margin-top: 24px;

      h3.section-title {
        color: $common-white;
        @include title-underline($common-white);
        margin-bottom: 10px;
      }

      ul {
        text-align: left;
        margin-left: 40px;

        li {
          line-height: 1.8;

          i {
            margin-right: 6px;
          }
        }
      }

    }

  }

  #avatar {
    height: 128px;
    margin-top: 48px;
    border: 2px $common-white solid;
    box-shadow: 1px 1px 1px $common-black;
  }
</style>
