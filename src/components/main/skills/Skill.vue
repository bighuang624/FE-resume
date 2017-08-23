<template>
  <div class="skill">
    <div class="skill-title" v-text="title"></div>
    <span class="skill-line">
      <span class="skill-value" :style="valueStyle"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    props: [
      'title',
      'value',
    ],
    data() {
      return {
        valueStyle: `
        width: ${this.value}%;
        animation: ${this.title} 2s ease-out;
        `,
      };
    },
    methods: {
      addSkillAnime() {
        const styleElement = document.createElement('style');
        styleElement.innerText += `
          @keyframes ${this.title} {
            0% { width: 0; }
            100% { width: ${this.value}%; }
          };
        `;
        document.getElementsByTagName('head')[0].appendChild(styleElement);
      },
    },
    created() {
      this.addSkillAnime();
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../../style/common";

  .skill {
    display: inline-block;
    width: 45%;
    margin: 0 20px 12px 0;
  }

  .skill-title {
    width: 75px;
    display: inline-block;
    text-align: right;
    margin-right: 10px;
  }

  .skill-line {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 8px;
    border-radius: 4px;
    background-color: $dark-blue;

    .skill-value {
      content: "";
      position: absolute;
      height: 100%;
      border-radius: 4px;
      background: $common-blue none repeat scroll 0 0;

    }
  }
</style>
