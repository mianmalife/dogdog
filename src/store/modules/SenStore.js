import axios from "axios";

export default {
  namespaced: true,
  //   modules: {
  //     nested,
  //   },
  mutations: {
    ADDITEM(state, value) {
      state.list.unshift(value);
    },
  },
  state: {
    text: "",
  },
  actions: {
    addServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADDITEM", { text: response.data });
        },
        (error) => {
          alert(`加载出错了`);
          console.log(`error:${error.message}`);
        }
      );
    },
  },
  getters: {},
};
