import Vue from 'vue';
import SelfEvaluation from '@/components/main/SelfEvaluation';

describe('SelfEvaluation.vue', () => {
  const Constructor = Vue.extend(SelfEvaluation);
  const vm = new Constructor().$mount();

  it('should render self-evaluation', () => {
    expect(vm.$el.querySelector('.self-evaluation .section-title h3').textContent)
      .to.equal('自我评价');
  });
});
