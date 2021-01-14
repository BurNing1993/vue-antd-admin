import { Module } from 'vuex';
import { RootState } from '../index';

export interface AppState {
  isCollapse: boolean;
}
const initState: () => AppState = () => ({
  isCollapse: localStorage.isCollapse === 'T',
});

const app: Module<AppState, RootState> = {
  state: initState(),
  mutations: {
    TOGGLE_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse;
      localStorage.isCollapse = state.isCollapse ? 'T' : 'F';
    },
  },
};

export default app;
