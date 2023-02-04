import { createStore } from "vuex";

const store = createStore({
    state: { countries: [] },
    getters: {
        getCountries(state) {
            return state.countries;
        },
    },
    mutations: {
        setCountries(state, fetchedData) {
            state.countries = fetchedData;
        },
    },
    actions: {
        async fetchCountries({ commit }) {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            commit("setCountries", data);
        },
    },
    modules: {},
});

export default store;
