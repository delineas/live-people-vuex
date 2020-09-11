<template>
  <div>
    <input type="text" v-model="newPerson" placeholder="Añade asistente" />
    <button @click="addPerson">Añadir</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      newPerson: "",
    };
  },
  methods: {
    ...mapMutations(["ADD_PERSON", "REMOVE_PERSON"]),
    addPerson() {
      this.ADD_PERSON(this.newPerson);
      //this.$store.commit('ADD_PERSON', this.newPerson)
      this.newPerson = "";
    },
  },
};
</script>
