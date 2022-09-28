<template>
  <div>
    <!-- beginiging of header panel containing the bg video and navbar -->
    <v-container relative fluid class="pa-0   landing">
      <video class="bgvideo" autoplay="" playsinline="" muted="" loop="">
        <source
          src="https://link.storjshare.io/s/jvfx5z72v42cou3p5pmxsr7lv3zq/kinplus/video/pexels-c-technical-6153734.mp4?download=1"
          type="video/mp4">
      </video>
      <div class="blur "></div>
      <Navbar @open="open($event)" v-if="navbar" />
      <v-card class="  hero z2 h-calc d-flex justify-center align-center ">
        <Hero />
      </v-card>
    </v-container>
    <!-- end of header panel containing the bg video and navbar -->

    <!-- the battle slide section of the landing page -->
    <v-container fluid class="wborder z2">
      <Battle />
    </v-container>
    <!-- end of  the battle slide section of the landing page -->

    <SideNav/>


    </div>

</template>

<script>

import Navbar from "../components/Navbar.vue";
import Hero from "../components/home/hero.vue";
import Battle from "../components/home/battle.vue";
import SideNav from "../components/SideNav.vue";

export default {
  name: "Home",
  data: () => ({
    navbar: true,
    drawer: false,
    
    account: [
      { text: 'Login', icon: 'login' },
      { text: 'Create Account', icon: 'mdi-account' },
      { text: 'Sign-out', icon: 'mdi-account' },
    ]
  }),
  components: {
    Navbar,
    Hero,
    Battle,
    SideNav
  },
  methods: {
    
  }
};
</script>
<style scoped>
</style>
<style scoped src="../assets/css/home.css">
</style>
