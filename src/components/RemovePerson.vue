<template>
  <button @click="remove">Borrar</button>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  methods: {
    remove() {
        this.$store.commit('REMOVE_PERSON', this.index);
    },
  },
};
</script>
