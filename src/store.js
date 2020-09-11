import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    title: "Haz magia con Vuex desde la Store",
    people: [],
    darkMode: false,
    course: {
      room: "",
      number: 0,
    },
  },
  getters: {
    countAttendees: (state) => state.people.length,
    isPersonHere: (state) => (name) =>
      state.people.some((person) => person === name),
  },
  mutations: {
    ADD_PERSON: (state, newPerson) => state.people.push(newPerson),
    LOAD_PEOPLE: (state, payload) => (state.people = payload),
    REMOVE_PERSON: (state, person) => state.people.splice(person, 1),
    SET_DARKMODE: (state, payload) => (state.darkMode = payload),
  },
  actions: {
    GET_USERS: (state) => {
      fetch("https://randomuser.me/api/?results=10&nat=es")
        .then((res) => res.json())
        .then((response) => {
          const names = response.results.map(
            (user) => `${user.name.first} ${user.name.last}`
          );
          state.commit("LOAD_PEOPLE", names);
        });
    },
  },
});