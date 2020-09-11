<template>
  <ol>
    <li v-for="(person, index) in people" :key="person">
      {{ person }} <RemovePerson :index="index"></RemovePerson>
    </li>
  </ol>
</template>

<script>
import RemovePerson from "./RemovePerson";

import { mapState } from "vuex";

export default {
  components: {
    RemovePerson,
  },
  computed: {
    ...mapState(["people"]),
  },
};
</script>

<style></style>
