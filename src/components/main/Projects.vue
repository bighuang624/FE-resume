<template>
  <section class="projects">
    <div class="section-title">
      <h3>开源项目</h3>
    </div>
    <ul class="projects-list">
      <li v-for="item in info">
        <div class="projects-title">
          <span v-text="item.name"></span>
          <p>
            <a class="projects-gitAddress" :href="item.gitAddress">项目地址</a>
            <a class="projects-onlineAddress" v-if="item.hasOnlineAddress" :href="item.onlineAddress">在线预览</a>
          </p>
        </div>
        <span class="projects-description" v-text="item.description"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  import getProjects from '../../api/projects';

  export default {
    name: 'projects',
    data() {
      return {
        info: [],
      };
    },
    created() {
      getProjects().then((response) => {
        this.info = response.info;
      }).then(() => {
        if (document.getElementById('leftNav').clientHeight < document.getElementById('mainBoard').clientHeight) {
          document.getElementById('leftNav').style.height = `${document.getElementById('mainBoard').clientHeight}px`;
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";

  .projects {
    padding-right: 40px;
  }

  .projects-list {

    li {
      margin-top: 16px;
      margin-right: 10%;
      width: 40%;
      display: inline-block;
    }
  }

  .projects-title {
    margin-bottom: 4px;

    span {
      color: $common-black;
      font-size: 18px;
      margin-right: 48px;
    }

    a {
      margin-right: 16px;
      font-size: 14px;
      color: $common-blue;

      &:hover {
        color: $dark-blue;
      }
    }
  }
</style>
