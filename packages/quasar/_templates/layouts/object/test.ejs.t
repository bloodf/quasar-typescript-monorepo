---
to: test/jest/__tests__/layouts/<%= h.changeCase.camel(folder) %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { mount, createLocalVue } from '@vue/test-utils';
import { LooseDictionary } from 'quasar/dist/types/ts-helpers';
import <%= h.changeCase.pascal(name) %> from 'layouts/<%= h.changeCase.camel(folder) %>/<%= h.changeCase.camel(name) %>.vue';

import * as All from 'quasar';

const { Quasar } = All;

const components = Object.keys(All)
  .reduce((object: LooseDictionary, key) => {
    const val = All[key];
    if (val && val.component && val.component.name != null) {
      return {
        ...object,
        [key]: val,
      };
    }
    return object;
  }, {});

describe('Mount <%= h.changeCase.camel(name) %>.vue', () => {
  const localVue = createLocalVue();

  localVue.use(Quasar, { components });

  const wrapper = mount(<%= h.changeCase.pascal(name) %>, {
    localVue,
  });

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
