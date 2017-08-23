<template>
  <section class="self-evaluation">
    <div class="section-title">
      <h3>自我评价</h3>
    </div>
    <p>我拥有对未知领域的学习热情和自学能力，并有做预先规划的习惯，能够守时守约地完成任务。</p>
    <p>我是一个友善的人，喜欢交流和分享自己编程学习中的困惑与经验。我在个人博客上发表了三十余篇学习笔记，并在 Github 上有多个开源项目。</p>
    <p>较多的项目经历和院学生会的任职锻炼了我处理事务以及团队领导、沟通的能力。</p>
  </section>
</template>

<script>
  export default {
    name: 'selfEvaluation',
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";

  .self-evaluation {
    padding-right: 40px;

    p {
      margin-bottom: 6px;
    }
  }
</style>
