<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld/> -->
      <vue-page-transition name="fade-in-right">
      <router-view></router-view>
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
