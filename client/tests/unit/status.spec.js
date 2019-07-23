import { shallowMount } from '@vue/test-utils';
import ViewStatus from '../../src/views/Status.vue';

describe('Status.vue', () => {
  it('renders correctly when passed a success response', () => {
    const response = { success: true };
    const wrapper = shallowMount(ViewStatus, {
      propsData: { response },
    });
    expect(wrapper.vm.header).toMatch('Email sent');
    expect(wrapper.vm.error).toMatch('');
  });
  it('renders correctly when passed a failed response', () => {
    const response = { success: false, errors: [] };
    const wrapper = shallowMount(ViewStatus, {
      propsData: { response },
    });
    expect(wrapper.vm.header).toMatch('Failed to send');
    expect(wrapper.vm.error).toBeTruthy();
  });
});
