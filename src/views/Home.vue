<template>
  <div class="wrap">
    <div class="mob_nav">
      <MobileNav></MobileNav>
      <router-view ></router-view>
      <SideNav />

    </div>
  
  </div>


</template>

<script>
import MobileNav from "@/components/navs/MobileNav.vue";
import SideNav from "../components/SideNav.vue";
import { bnav } from "@/main.js"; // 

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
    SideNav,
    MobileNav,
  },
  methods: {

  },
  created(){
        bnav.$emit("switch", (true))
    }
};
</script>
<style scoped>


@media (min-width:800px) {

  .mob_nav {
    display: none;
  }
}
</style>