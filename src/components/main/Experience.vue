<template>
  <section class="experience">
    <div class="section-title">
      <h3>项目经历</h3>
    </div>
    <ul class="experience-list">
      <li v-for="item in info">
        <div class="experience-title">
          <h4 v-text="item.name"></h4>
          <span v-text="item.time"></span>
        </div>
        <div class="experience-intro">
          <h4 v-text="item.intro"></h4>
          <span class="experience-description" v-text="item.description"></span>
        </div>
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
            name: '“遇见”',
            time: '2016',
            intro: '旅游记录展示空间',
            description: '作为队长带队，担任产品经理和设计师，负责产品定位，用户需求分析，界面设计等工作并承担组内协调、答辩PPT制作以及现场答辩的任务。最终获得“零杯”网页设计大赛一等奖。',
          },
          {
            name: '“周末愉快”',
            time: '2016',
            intro: '休闲娱乐社交APP',
            description: '作为队长带队，负责创意的提出、完善，用户需求分析，初步界面设计，未来发展构想等工作并承担信息整合、答辩PPT制作以及现场答辩的任务。最终获得软件创意大赛二等奖。',
          },
          {
            name: '探方网',
            time: '2017',
            intro: '基于大数据的IP价值评估及预测平台',
            description: '作为前端开发组组长，负责整个项目的前端开发。所用技术包括且不限于 vue、vue-router、vuex、element、axios、Echarts 等。',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";

  .experience {

  }

  .experience-list {

    li {
      margin-top: 16px;
      display: flex;
    }
  }

  .experience-title {
    width: 130px;

    h4 {
      color: $common-blue;
    }
  }

  .experience-intro {
    h4 {
      margin-bottom: 4px;
    }
  }
</style>
