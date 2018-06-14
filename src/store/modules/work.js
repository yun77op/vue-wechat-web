import request from '@/components/request'
import Vue from 'vue';
import {stringify} from 'querystring'

const work = {
    state: {
        map: {},
        list: [],
        page: 0,
        loading: false
    },
    mutations: {
      setWorkList(state, {data}) {
            data.forEach((item) => {
              Vue.set(state.map, item.id, item);
            })
            state.list = state.list.concat(data)
        },

        setLoading(state, {loading, page}) {
          state.loading = loading

          if (page !== undefined) {
            state.page = page
          }
        }
    },
    actions: {
        getWorkList(context, {activityId}) {
          if (context.state.loading) {
            return
          }

          context.commit('setLoading', {
            loading: true
          });
          request({url: `/wap/works.json?${stringify({activityId, page: context.state.page + 1})}`})
                .then((resp) => {
                  context.commit('setLoading', {
                    loading: false,
                    page: context.state.page + 1
                  });

                  context.commit('setWorkList', {
                      data: resp.data.voteItemVOs
                  });
                })
        }
    }
}

export default work;
