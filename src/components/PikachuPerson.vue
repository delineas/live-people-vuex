<template>
    <div v-if="isPersonHere('Pikachu')">
      <p>¡Está Pikachu! 😂</p>
    </div>
    <div v-else>
       ¡Ohhhh! Pickachu... 😲
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["isPersonHere"]),
  },
}
</script>
