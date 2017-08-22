import Vue from 'vue';
import LeftNav from '@/components/LeftNav';

describe('LeftNav.vue', () => {
  const Constructor = Vue.extend(LeftNav);
  const vm = new Constructor().$mount();

  it('should render correct name', () => {
    expect(vm.$el.querySelector('.leftNav h1').textContent)
      .to.equal('Kyon Huang');
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.leftNav h3').textContent)
      .to.equal('Web 开发工程师');
  });
});
