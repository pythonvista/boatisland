<template>
  <div>
    <v-app-bar>
      <h3>Admin Dashboard</h3>
      <v-spacer></v-spacer>
        <div  v-if="showNavBtn">
          <v-btn exact to="/" class="mr-2">Home</v-btn>
          <v-btn v-if="activeUser" exact to="admin" class="mr-2">Dashboard</v-btn>
          <v-btn v-if="activeUser" @click="signout" class="mr-2">Log Out</v-btn>
          <v-btn v-if="!activeUser" exact to="register" class="mr-2">Register</v-btn>
          <v-btn v-if="!activeUser" exact to="login" class="mr-2">Login</v-btn>

        </div>
    </v-app-bar>

  </div>

</template>

<script>

import { logOut } from '@/Auth/index'
import { mapState } from "vuex";
export default {
  name: 'AdminNav',
  data: () => ({


  }),

  computed: {
    ...mapState(['admin', 'activeUser']),

    showNavBtn() {
      return this.activeUser !== null
    }
  },

  methods: {

    signout() {
      logOut().then(() => {
        this.$store.dispatch('RemoveUser', "")
        this.$store.dispatch('RemoveRole', "")
        this.$router.push({
          name: "Login"
        })
      })
        .catch((err) => {
          console.log(err)
        })

    }
  }

}
</script>

<style>
</style>