import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import FlbSearchComponent from './components/FlbSearchComponent';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const FlbSearch = wrap(Vue, FlbSearchComponent);

window.customElements.define('flb-search', FlbSearch);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
