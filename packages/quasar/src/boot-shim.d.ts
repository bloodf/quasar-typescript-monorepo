import { VueConstructor } from 'vue';
import { LooseDictionary } from 'quasar/dist/types/ts-helpers';

export type BootParams = {
  Vue: VueConstructor;
} & LooseDictionary;
