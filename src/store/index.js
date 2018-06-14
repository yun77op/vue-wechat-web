import work from './modules/work';
import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
      work
    }
})

export default store;

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment: (state) => {
//       const obj = state
//       obj.count += 1
//     },
//     decrement: (state) => {
//       const obj = state
//       obj.count -= 1
//     }
//   }
// })

// export default store
