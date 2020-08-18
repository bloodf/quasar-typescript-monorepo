/**
 * @jest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils';
import App from 'src/App.vue';
import { mountQuasarOptions } from 'jest/utils';

describe('Mount App.vue', () => {
  const baseOptions = mountQuasarOptions();

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount(App, baseOptions);

    expect(wrapper.exists()).toBe(true);
  });
});
