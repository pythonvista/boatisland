<template>
  <div class="wrap px-4 py-5 flex flex-col gap-2 items-center justify-center">
    <p class="ma-0 pa-0 font-bold text-2xl">Sign In</p>
    <v-divider class="w-full mt-2"></v-divider>
    <v-form ref="form" class="w-full mt-5 flex flex-col gap-1">
      <div class="flex flex-col gap-3">
        <v-label class="px-2">Email</v-label>
        <v-text-field color="#FF7643"   outlined height="10" dense clearable></v-text-field>
      </div>

      <div class="flex flex-col gap-3">
        <v-label class="px-2">Password</v-label>
        <v-text-field color="#FF7643"   outlined height="10" dense clearable></v-text-field>
      </div>
      <p color="#FF7643" class="ma-0 pa-0 font-thin">Forgot Password?</p>
      <v-btn class="mt-2 white--text" color="#FF7643" large>Sign In</v-btn>
    </v-form>
    <p class="ma-0 pa-0 font-light text-center my-1 ">By clicking sign in, you agree to our <span class="primarys">Terms of Use</span>  & Privacy Policy.</p>
    <v-divider class="w-full my-2"></v-divider>
    <v-btn text class="font-light">Dont have an account? <span class="primarys"> Sign up</span></v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.primarys{
  color: #FF7643 !important;
}

</style> 