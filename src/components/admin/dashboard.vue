<template>
  <div>

    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>All Users</h2>
        
        <div v-for="user in Users" :key="user.id" class="user">
          <h4>User Fullname: {{ user.fullname }}</h4>
          <h4>User Email: {{ user.email }}</h4>
          <h4>User Role: {{ user.role }}</h4>
          <h4>Username: {{ user.username }}</h4>
           <!-- <div class="img" :style="{ 'background-image': 'url(' + user.img + ')' }">
          </div>
          <input type="file" > -->
          <!-- <v-btn><v-file-input accept=".png, .jpeg"  class="inp"></v-file-input>🧞‍♂️</v-btn> -->
          <div class="d-flex   pa-1 ">
            <v-btn class="mr-2" @click="makeAdmin(user.id)">Make Admin</v-btn>
            <v-btn @click="makeUser(user.id)">Make User</v-btn>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>



import { mapState } from "vuex"
import { alluser, onSnapshot, UpdateADoc } from "@/Auth/index"
import { bus } from "@/main.js"

export default {
  name: "dashboard",

  computed: {
    uid() {
      return this.activeUser;
    },
    ...mapState(["activeUser"])
  },
  data: () => ({
    dform: {},
    Users: []
  }),
  methods: {
    getUsers() {
      onSnapshot(alluser("users"), (snapshot) => {
        this.Users = []
        snapshot.forEach((doc) => {
          this.Users.push({ ...doc.data(), id: doc.id });
        });
      })

    },

    async makeAdmin(uid) {
      try {
        await UpdateADoc.update("users", uid, { role: "admin" })
        bus.$emit("snackbar", { msg: "User Made Admin", color: "success" });
      } catch (err) {
        bus.$emit("snackbar", { msg: "Error Eccoured", color: "error" });
      }

    },
    async makeUser(uid) {
      try {
        await UpdateADoc.update("users", uid, { role: "user" })
        bus.$emit("snackbar", { msg: "Admin Made User", color: "success" });
      } catch (err) {
        bus.$emit("snackbar", { msg: "Error Eccoured", color: "error" });
      }
    },
    
  },
  created() {
    this.getUsers();
  },

}
</script>

<style scoped>
.user {
  border: 2px solid black;
  padding: 10px;
  font-family: cursive;
  margin: 10px;
}
.img{
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
}

.inp{
 
  outline: none !important;
height: 60px;
  cursor: pointer !important;
  

}
</style>