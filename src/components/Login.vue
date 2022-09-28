<template>
  <div>
    <loginNav />
    <v-container fluid class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input v-model="dform.email" type="text" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input v-model="dform.password" type="password" placeholder="Password" />
            </div>
            <v-btn class="white--yellow" @click="Login" :loading="loading">Login</v-btn>
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div class="mt-2"><a class="black--text">Dont Have An Account ? <span class="blue--text"
                  id="sign-up-btn">Sign up</span></a></div>


          </form>
          <form action="#" class="sign-up-form">

            <div v-if="signupForm">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input v-model="regform.fullname" type="text" placeholder="FullName" />
              </div>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input v-model="regform.username" type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input v-model="regform.email" type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input v-model="regform.password" type="password" placeholder="Password" />
              </div>
              <div class="d-flex justify-center align-center flex-column">
                <v-btn class="white--yellow" @click="signup" :loading="loading">Sign Up</v-btn>
                <v-btn class="mt-2" flat @click="studentLogin()">Kinplus Student ?</v-btn>

                <div class="mt-2"><a class="black--text">Have An Account ? <span class="blue--text"
                      id="sign-in-btn">Sign
                      in</span></a></div>
              </div>
            </div>
            <div v-if="studentForm" >
              <h2 class="title">Sign up with KINPLUS Student Email</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input v-model="stuForm.email" type="text" placeholder="Student Email" />
              </div>
              <div class="input-field" v-if="otpBox">
                <i class="fas fa-lock"></i>
                <input v-model="stuForm.username" type="number" placeholder="Enter Otp" />
              </div>
              <div class="d-flex justify-center align-center">
                <v-btn class="white--yellow" v-if="!otpBox" @click="otpBox = !otpBox" :loading="loading">Submit</v-btn>
              <v-btn class="white--yellow" v-if="otpBox" @click="otpBox = !otpBox" :loading="loading">Verify Email</v-btn>
              </div>
              

            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">

        <div class="panel left-panel">
          <div class="content">
           
           <Discover/>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>

        <div class="panel right-panel">
          <div class="content">
            <Discover/>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </v-container>

  </div>

</template>

<script>

import { selectedUser, onSnapshot, login } from '@/Auth'
import { createAccount, docUpate, logOut } from '@/Auth'
import { mapActions } from "vuex";
import loginNav from '@/components/navs/loginNav.vue';
import Discover from '@/components/home/Discover.vue'
import { bus } from "@/main.js"
export default {
  name: "Login",
  components: {
    loginNav,
    Discover
  },
  data: () => ({
    
    signupForm: true,
    studentForm: false,
    otpBox: false,
    regform: {},
    stuForm: {},
    dform: {},
    loading: false
  }),
  methods: {
    ...mapActions(["ActiveUser", "AdminLogin"]),
    async Login() {
      this.loading = true
      try {
        const data = await login.start(this.dform.email, this.dform.password)
        bus.$emit("snackbar", { msg: "Logged In Succesful", color: "success" });
        let curUser = data.user.uid
        this.$store.dispatch('ActiveUser', curUser)
        onSnapshot(selectedUser("users", curUser), (doc) => {
          let userRole = doc.data().role
          this.$store.dispatch('UserRole', userRole)
          this.loading = false
          this.$router.go({
            path: 'admin'
          });
        })
      } catch (err) {
        this.loading = false
        if (err.message == "Firebase: Error (auth/invalid-email).") {
          bus.$emit("snackbar", { msg: "Invalid Email Or Password", color: "error" });
        } else if (err.message == "Firebase: Error (auth/user-not-found).") {
          bus.$emit("snackbar", { msg: "Email Not found", color: "error" });

        } else if (err.message == "Firebase: Error (auth/missing-email).") {
          bus.$emit("snackbar", { msg: "Provide Email Or Password", color: "error" });
        }
        else if (err.message == "Firebase: Error (auth/wrong-password).") {
          bus.$emit("snackbar", { msg: "Incorrect Password. Try Again!", color: "error" });
        } else if (err.message == "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
          bus.$emit("snackbar", { msg: "Account Disabled. To Many Attempted Failed Login. Reset Your Password", color: "error" });
        } else {
          bus.$emit("snackbar", { msg: "Error Ecountered", color: "error" });
          // alert(err.message);
        }
      }
    },
    async signup() {
      this.loading = true
      try {
        const data = await createAccount.start(this.regform.email, this.regform.password)
        await docUpate.update("users", data.user.uid, {
          fullname: this.regform.fullname,
          email: data.user.email,
          username: this.regform.username,
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
        if (err.message == "Firebase: Error (auth/admin-restricted-operation).") {
          bus.$emit("snackbar", { msg: "❌ Fill in the required information", color: "error" });
          return
        }
        if (err.message != "Firebase: Error (auth/email-already-in-use)." &&
          err.message != "Firebase: Password should be at least 6 characters (auth/weak-password)." &&
          err.message != "Firebase: Error (auth/missing-email).") {
          bus.$emit("snackbar", { msg: "❌ Server Error", color: "error" });
        }
        // alert(err.message)

      }

    },
    signout() {
      logOut()
        .then(() => {
          localStorage.removeItem('activeUser')
          bus.$emit("snackbar", { msg: "Account Created!! Login In", color: "success" });
          this.$router.go({
            name: "login"
          })
        })
        .catch((err) => {
          console.log(err)
        })

    },
    studentLogin() {
      this.signupForm = false
      this.studentForm = true
    }
  },
  created() {
    var scripts = [
      "./js/login.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
}
</script>
<style scoped>
.content{
  /* border: 2px solid red; */
   box-shadow: -1px 6px 38px 3px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: -1px 6px 38px 3px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: -1px 6px 38px 3px rgba(0, 0, 0, 0.58);
  /* background-color: white; */

  padding: 10px 10px;
  height: 320px;
  width: 250px;

}
</style>
<style scoped src="../assets/css/login.css">
</style>
