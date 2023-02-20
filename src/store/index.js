import { createStore } from "vuex";
import SenStore from "./modules/SenStore";

const store = createStore({
  modules: {
    SenStore,
  },
});

export default store;
