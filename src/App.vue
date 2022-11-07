<template>
  <v-app class="apps">
    <v-main>
      <router-view />
    </v-main>
    <v-snackbar :color="snackcolor" v-model="snackbar" :timeout="timeout">
      {{ snackmsg }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-bottom-navigation v-if="buttonnav" class="bottom">
      <div class="flex py-3 flex-row items-center justify-evenly w-full">
        <v-btn :to="{ path: '/home' }" color="transparent" exact large>
          <v-icon color="black">mdi-home</v-icon>
        </v-btn>
        <v-btn :to="{ name: 'explore' }" color="transparent" large>
          <v-icon color="black">mdi-magnify</v-icon>
        </v-btn>


        <v-btn :to="{ name: 'libary' }" color="transparent" large>
          <v-icon color="black">mdi-video</v-icon>
        </v-btn>

        <v-btn :to="{ name: 'profile' }" color="transparent" large>
          <v-icon color="black">mdi-account</v-icon>
        </v-btn>
      </div>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { bus, bnav } from "@/main.js"; // 
export default {
  name: "App",

  data: () => ({
    snackbar: false,
    snackmsg: '',
    snackcolor: '',
    timeout: 2000,
    value: 1,
    buttonnav: false,

  }),
  created() {
    bus.$on("snackbar", (event) => {
      this.snackcolor = event.color
      this.snackbar = true;
      this.snackmsg = event.msg
    });

    bnav.$on("switch", (event)=>{
      this.buttonnav = event
    })

  }
};
</script>
<style scoped>
.apps {
  height: 100vh !important;
  overflow: hidden;
  overflow-y: scroll;
}

.bottom {
  position: sticky;
  bottom: 0;
  left: 0;
}

.apps::-webkit-scrollbar {
  display: none;
}


</style>
