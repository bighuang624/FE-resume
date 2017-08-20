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
    float: left;
    margin-left: -100%;
    height: $common-height;
    padding-top: 48px;
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
          line-height: 2;

          i {
            margin-right: 6px;
            font-size: 18px;
            width: 20px;
          }
        }
      }

    }

  }

  #avatar {
    height: 128px;
    border: 4px $common-white solid;
    border-radius: 4px;
    box-shadow: 1px 1px 1px $common-black;
  }
</style>
