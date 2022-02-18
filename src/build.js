import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import FlbSearchComponent from './components/FlbSearchComponent';

const FlbSearch = wrap(Vue, FlbSearchComponent);

window.customElements.define('flb-search', FlbSearch);
