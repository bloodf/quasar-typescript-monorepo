import type { mount } from '@vue/test-utils';
import { QuasarPluginOptions } from 'quasar';
import Vue, { PluginFunction, PluginObject } from 'vue';
import { Module } from 'jest/utils';

/**
 * Utility type to declare an extended Vue constructor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue;

interface VuexModule<S, R> {
  name: string;
  module: Module<S, R>
}

export type VueMountOptions = Parameters<typeof mount>[1];
// `PluginFunction<any | never>` won't work either because it get swallowed by the `any` part
export type VuePlugin =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  | PluginObject<any>
  | PluginObject<never>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | PluginFunction<any>
  | PluginFunction<never>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VuePluginOptions = any[];

/**
 * `mountQuasar` options interface
 */
export interface QuasarMountOptions {
  mount?: {
    type?: 'full' | 'shallow';
  } & VueMountOptions;
  quasar?: Partial<QuasarPluginOptions>;
  propsData?: Record<string, any>;
  plugins?: (VuePlugin | [VuePlugin, ...VuePluginOptions])[];
  vuexModule?: VuexModule<any, any>[];
  lang?: string;
}
