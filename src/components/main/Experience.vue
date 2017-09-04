<template>
  <section class="experience">
    <div class="section-title">
      <h3>参赛经历</h3>
    </div>
    <ul class="experience-list">
      <li v-for="item in info">
        <div class="experience-title">
          <h4 v-text="item.name"></h4>
          <span v-text="item.time"></span>
        </div>
        <div class="experience-detail">
          <div>
            <h4 v-text="item.intro"></h4>
            <a class="experience-address" v-if="item.hasAddress" :href="item.address">项目在线预览</a>
          </div>
          <span class="experience-description" v-text="item.description"></span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import getExperience from '../../api/experience';

  export default {
    name: 'experience',
    data() {
      return {
        info: [],
      };
    },
    created() {
      getExperience().then((response) => {
        this.info = response.info;
      }).then(() => {
        document.getElementById('leftNav').style.height = `${document.getElementById('mainBoard').clientHeight}px`;
      });
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";

  .experience {
    padding-right: 40px;
  }

  .experience-list {

    li {
      margin-top: 16px;
      display: -webkit-flex; /* Safari */
      display: flex;
      -webkit-justify-content: flex-start; /* Safari */
      justify-content: flex-start;
    }
  }

  .experience-title {
    width: 130px;

    h4 {
      color: $common-blue;
    }
  }

  .experience-detail {
    h4 {
      margin-bottom: 4px;
      display: inline-block;
    }
  }

  .experience-address {
    margin-left: 16px;
    font-size: 14px;
    color: $common-blue;

    &:hover {
      color: $dark-blue;
    }
  }
</style>
