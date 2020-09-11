<template>
  <div id="app" :class="darkMode ? `night` : ``">
    <SelectMode />
    <LiveTitle/>
    <CountAttendees/>
    <InputPerson/>
    <PikachuPerson/>
    <PeopleList/>
  </div>
</template>

<script>
import SelectMode from './components/SelectMode.vue'
import LiveTitle from './components/LiveTitle.vue'
import CountAttendees from './components/CountAttendees.vue'
import InputPerson from './components/InputPerson.vue'
import PikachuPerson from './components/PikachuPerson.vue'
import PeopleList from './components/PeopleList.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    SelectMode,
    LiveTitle,
    InputPerson,
    CountAttendees,
    PikachuPerson,
    PeopleList,
  },
  computed: {
    ...mapState(['darkMode'])
  },
  mounted() {
    this.$store.dispatch('GET_USERS')
  },
  created() {

  },
  data() {
    return {

    }
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
}
#app {
  padding: 20px;
}
.night {
  background-color: #000;
  color: #FFF;
}
</style>
