import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import ViewHome from '../../src/views/Home.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Home.vue', () => {
  it('renders the form', () => {
    const wrapper = mount(ViewHome, { localVue });
    expect(wrapper.findAll('input').length).toBe(5);
    expect(wrapper.findAll('textarea').length).toBe(1);
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('renders feedbacks if inputting invalid value', () => {
    const wrapper = mount(ViewHome, { localVue });
    wrapper.setData({
      model: {
        from: 'hello@email',
        to: 'to@email.com, sdf',
        subject: 'Subject',
        content: '',
      },
    });
    expect(wrapper.find('input[name="from"]').attributes().class).toContain('is-invalid');
    expect(wrapper.find('input[name="to"]').attributes().class).toContain('is-invalid');
    expect(wrapper.find('input[name="subject"]').attributes().class).not.toContain('is-invalid');
    expect(wrapper.find('textarea[name="content"]').attributes().class).not.toContain('is-invalid');
  });
});
