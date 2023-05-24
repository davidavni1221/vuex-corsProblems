import { listService } from '@/services/list-service.js'

export default {
  state: {
    lists: [],
  },

  getters: {
    lists({ lists }) {
      return lists
    },
   
  },
  mutations: {
    setLists(state, { lists }) {
      state.lists = lists
    },
   
  },
  actions: {
    loadLists({ commit, state }) {
      listService.query().then((lists) => {
        commit({ type: 'setLists', lists })
      })
    },
   
  },
}
