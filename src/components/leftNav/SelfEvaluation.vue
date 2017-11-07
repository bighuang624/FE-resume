<template>
  <section class="self-evaluation">
    <h3 class="section-title">自我评价</h3>
    <p>我拥有对未知领域的学习热情和自学能力，并有做预先规划的习惯，能够守时守约地完成任务。</p>
    <p>我喜欢交流和分享自己编程学习中的困惑与经验，在个人博客上发表了四十余篇学习笔记。</p>
    <p>我长期活跃于开源软件社区 Github，有向其他项目提 issue 和 PR 的经历，并创建了多个开源项目。</p>
    <p>我关心软件行业的发展趋势，每天浏览掘金和 Github Trending，并持续关注一些技术大牛的博客、微博、知乎专栏等。</p>
    <p>我掌握较好的英语读写能力，能够流畅阅读大部分英文的计算机编程相关学习资料。</p>
    <p>丰富的项目经验和院学生会的任职经历锻炼了我处理事务以及团队领导、沟通的能力。</p>
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

    margin: 0 40px;

    p {
      margin-bottom: 8px;
      text-align: left;
    }
  }
</style>
