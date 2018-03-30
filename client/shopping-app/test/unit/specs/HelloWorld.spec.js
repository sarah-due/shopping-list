import Vue from 'vue'
import Home from '@/components/Home'

describe('ProductList Component', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.product-header').textContent)
      .to.equal('Shopping List')
  })
})
