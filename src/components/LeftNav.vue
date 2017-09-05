<template>
  <div id="leftNav">
    <img id="avatar" src="../assets/avatar.jpg">
    <h1>Kyon Huang</h1>
    <h3>Web 开发工程师</h3>
    <aboutMe></aboutMe>
    <contact></contact>
    <self-evaluation></self-evaluation>
  </div>
</template>

<script>
  import AboutMe from './leftNav/AboutMe';
  import Contact from './leftNav/Contact';
  import SelfEvaluation from './leftNav/SelfEvaluation';

  export default {
    name: 'leftNav',
    components: {
      AboutMe,
      Contact,
      SelfEvaluation,
    },
    data() {
      return {};
    },
    beforeUpdate() {

    },
    mounted() {
      window.onresize = function WindowOnresize() {
        if (document.getElementById('leftNav').clientHeight < document.getElementById('mainBoard').clientHeight) {
          document.getElementById('leftNav').style.height = `${document.getElementById('mainBoard').clientHeight}px`;
        }
      };
    },
  };
</script>

<style lang="scss">
  @import "../style/common";

  #leftNav {
    width: 288px;
    height: 1000px;
    float: left;
    margin-left: -100%;
    padding: 48px 0;
    background-color: $common-blue;

    h1 {
      color: $common-white;
      margin-top: 10px;
    }

    section.aboutMe, section.contact, section.self-evaluation {

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
    background-color: $common-white;
    border-radius: 4px;
    box-shadow: 1px 1px 1px $common-black;
  }
</style>
