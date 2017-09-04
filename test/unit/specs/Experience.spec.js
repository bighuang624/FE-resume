import Vue from 'vue';
import Experience from '@/components/main/Experience';

describe('Experience.vue', () => {
  const Constructor = Vue.extend(Experience);
  const vm = new Constructor().$mount();

  it('should render experience', () => {
    expect(vm.$el.querySelector('.experience .section-title h3').textContent)
      .to.equal('参赛经历');
  });
});
