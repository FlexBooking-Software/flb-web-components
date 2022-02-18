<template>
  <v-app class="grey lighten-4">
    <v-main class="mx-4 mb-4">
      <h1>Flexbook components demo</h1>
      <hr/>
      <flb-search title="sdfsdf">
      </flb-search>
    </v-main>
  </v-app>
</template>

<script>
import FlbSearch from './components/FlbSearchComponent'

export default {
  name: 'App',
  components: { FlbSearch },
  data: () => ({
    //
  }),
};
</script>
