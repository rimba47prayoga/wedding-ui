import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    event_id: 0,
    wedding_information: {
      cpw: "",
      cpp: "",
      nn_cpw: "",
      nn_cpp: "",
      ayah_cpw: "",
      ibu_cpw: "",
      ayah_cpp: "",
      ibu_cpp: "",
      alamat_cpw: "",
      alamat_cpp: "",
      bank: "",
      no_rekening: "",
      atas_nama_rekening: "",
      logo_url: "",
      hari_bahagia: "",
      akad: {
        location_info: "",
        start_schedule: "",
        end_schedule: "",
        link_gmaps: "",
        kloter: null,
        is_private: false
      },
      resepsi: {
        location_info: "",
        start_schedule: "",
        end_schedule: "",
        link_gmaps: "",
        kloter: null,
        is_private: false
      }
    },
    guest_information: {
      qrguest: "",
      guest_id: 0,
      guest_name: "",
      guest_address: "",
      kloter: "",
      is_attend: false,
      is_confirmed: false
    }
  },
  mutations: {
    SET_EVENT_ID(state, event_id) {
      state.event_id = event_id;
    },
    SET_WEDDING_INFO(state, data) {
      state.wedding_information = data;
    },
    SET_GUEST_INFO(state, data) {
      state.guest_information = data;
    }
  },
  actions: {
    setEventID({ commit }, event_id) {
      commit('SET_EVENT_ID', event_id)
    },
    setWeddingInfo({ commit }, data) {
      commit('SET_WEDDING_INFO', data);
    },
    setGuestInfo({ commit }, data) {
      commit('SET_GUEST_INFO', data);
    }
  }
})
