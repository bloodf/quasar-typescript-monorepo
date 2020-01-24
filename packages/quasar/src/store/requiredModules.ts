import { Module } from 'vuex';
import { toCamel } from 'utils/text';


const requireModule = require.context('./modules', true, /index+\.(?:js|jsx|ts|tsx)$/i);
const modules: { [index: string]: Module<{}, {}> } = {};

requireModule.keys().forEach((fileName: string) => {
  const moduleName: string = toCamel(fileName.replace(/(\.\/|\.ts|\.tsx|\.js|\.jsx)/i, ''));
  if (moduleName) {
    modules[moduleName] = {
      namespaced: true,
      ...requireModule(fileName).default,
    };
  }
});

export default modules;
