<template>
  <v-app>
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
  </v-app>
</template>

<script>
import { bus, mob_nav } from "@/main.js"; // 
export default {
  name: "App",

  data: () => ({
    snackbar: false,
    snackmsg: '',
    snackcolor: '',
    timeout: 2000,
    //
  }),
  created() {
    bus.$on("snackbar", (event) => {
      this.snackcolor = event.color
      this.snackbar = true;
      this.snackmsg = event.msg
    });

    mob_nav.$on("mob-nav", () => {
      this.sheet = true
    });
  }
};
</script>
