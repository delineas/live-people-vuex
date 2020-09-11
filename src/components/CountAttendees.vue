<template>
  <h2>Hay {{ countAttendees }} asistentes</h2>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["countAttendees"]),
  },
};
</script>
