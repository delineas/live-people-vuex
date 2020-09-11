<template>
  <h1>Directo: {{ title }}</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["title"]),
  },
};
</script>

<style></style>
