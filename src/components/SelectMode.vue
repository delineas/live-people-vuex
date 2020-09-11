<template>
  <label for="darkMode">
    <input type="checkbox" v-model="darkMode" /> Modo oscuro
  </label>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      },
      set(value) {
        this.$store.commit("SET_DARKMODE", value);
      },
    },
  },
};
</script>
