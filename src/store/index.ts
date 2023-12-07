import { Themes } from '~/constants';
import createStore from './store';

const { Provider, useStore } = createStore({
  first: '',
  last: '',
  theme: window.localStorage.getItem('theme') || Themes.dark,
});

export { useStore };
export default Provider;
