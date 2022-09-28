<template>
    <div class="nav d-flex align-center pa-2">
        <div class="d-flex align-center justify-center logo-holder">
            <img src="../../assets/img/logo.png" alt="">
            <h2 class="black--text">BoatIsland</h2>
        </div>
        <v-spacer></v-spacer>
        <v-btn small  text class="mr-2" id="sign-intop-btn">Login</v-btn>
        <v-btn small text class="mr-2" id="sign-uptop-btn">Register</v-btn>
        <!-- <span class="blue--text"  >Sign up</span> -->
    </div>
</template>
<script>
export default {
    name: "loginNav",
    data: () => {

    },
    //     
}
</script>

<style  scoped>
.nav {

    background: white;
    height: 10vh;
}

.logo-holder{
  gap: 10px;
  justify-content: flex-start !important;
}

.logo-holder img{
  width: 10% !important;

}

@media (max-width:900px) {
  .logo-holder img{
  width: 28% !important;

}

}
</style>