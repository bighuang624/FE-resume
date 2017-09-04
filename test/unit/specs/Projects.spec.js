import Vue from 'vue';
import Projects from '@/components/main/Projects';

describe('Projects.vue', () => {
  const Constructor = Vue.extend(Projects);
  const vm = new Constructor().$mount();

  it('should render projects', () => {
    expect(vm.$el.querySelector('.projects .section-title h3').textContent)
      .to.equal('开源项目');
  });
});
