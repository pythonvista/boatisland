<template>
  <div>
    <!-- beginiging of header panel containing the bg video and navbar -->
    <v-container relative fluid class="pa-0 landing xs:hidden md:block">
      <div class="blur"></div>
      <Navbar  @open="open($event)" v-if="navbar" class="xs:hidden md:hidden" />
     
      <v-card class="  hero z2 h-calc d-flex justify-center align-center ">
        <Hero class="xs:hidden md:block" />
      </v-card>
    </v-container>
    <MobileNav></MobileNav>
    <router-view></router-view>
   
    <!-- <div >
      <dashboard />
    </div>
    -->
    
    <!-- end of  the battle slide section of the landing page -->

    <SideNav/>


    </div>

</template>

<script>

import Navbar from "../components/Navbar.vue";
import Hero from "../components/home/hero.vue";
// import dashboard from "../components/home/dashboard.vue";
import MobileNav from "@/components/navs/MobileNav.vue";
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
    // dashboard,
    SideNav,
    MobileNav,
  },
  methods: {
    
  }
};
</script>
<style scoped>
</style>
<style scoped src="../assets/css/home.css">
</style>
