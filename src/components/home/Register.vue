<template>
  <div>
    <AdminNav />
    <div class="form">
      <h2 style="text-align:center;">Create Admin</h2>
      <form action="">
        <input type="text" required placeholder="Full Name" v-model="dform.fullname">
        <input type="email" required placeholder="Email" v-model="dform.email">
        <input type="text" placeholder="Username" v-model="dform.username">
        <input type="password" placeholder="Password" v-model="dform.password">

        <v-btn @click="signup" :loading="loading">Create Admin</v-btn>
      </form>
    </div>
  </div>


</template>

<script>

import { createAccount, docUpate, logOut } from '@/Auth'
import AdminNav from '@/components/admin/AdminNav.vue';
import { bus } from "@/main.js"
export default {
  name: "Register",
  component: {
    AdminNav
  },
  data: () => ({
    dform: {},
    loading: false
  }),
  methods: {
    async signup() {
      this.loading = true
      try {
        const data = await createAccount.start(this.dform.email, this.dform.password)
        await docUpate.update("users", data.user.uid, {
          fullname: this.dform.fullname,
          email: data.user.email,
          username: this.dform.username,
          role: "user"
        })
        this.loading = false
        this.signout()
      }
      catch (err) {
        this.loading = false
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
          bus.$emit("snackbar", { msg: "❌ Email Already In Use", color: "error" });
        }
        if (err.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
          bus.$emit("snackbar", { msg: "❌ Password should be at least 6 characters", color: "error" });
        }
        if (err.message == "Firebase: Error (auth/missing-email).") {
          bus.$emit("snackbar", { msg: "❌ Provide Email or Password to continue", color: "error" });
        }
        if (err.message != "Firebase: Error (auth/email-already-in-use)." &&
          err.message != "Firebase: Password should be at least 6 characters (auth/weak-password)." &&
          err.message != "Firebase: Error (auth/missing-email).") {
          bus.$emit("snackbar", { msg: "❌ Server Error", color: "error" });
        }

      }

    },
    signout() {
      logOut()
        .then(() => {
          localStorage.removeItem('activeUser')
          bus.$emit("snackbar", { msg: "Account Created!! Login In", color: "success" });
          this.$router.push({
            name: "AdminLogin"
          })
        })
        .catch((err) => {
          console.log(err)
        })

    }
  },
  components: { AdminNav }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

form input {
  width: 100%;
  border: 1px solid black;
  margin: 5px;
}
</style>