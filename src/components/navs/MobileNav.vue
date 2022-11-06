<template>
  <div class="mobile_nav flex items-center justify-between px-2 py-2">
    <div class="logo">
        <img src="img/logo.png" alt="">
    </div>
    <div class="flex items-center justify-end">
        <v-btn small depressed color="transparent" fab><v-icon color="black" small>mdi-bell</v-icon></v-btn>
        <v-btn small depressed color="transparent" fab><v-icon color="black" small>mdi-cart</v-icon></v-btn>
        <v-btn @click="openNav" small depressed color="transparent" fab><v-icon color="black" >mdi-menu</v-icon></v-btn>
    </div>

  </div>
</template>

<script>
import {  bus } from '@/main';
export default {
    name:'MobileNav',
    methods:{
        openNav(){
           bus.$emit("open")
        }
    }

}
</script>

<style scoped>

.mobile_nav{
    border-bottom: 1px solid #FF7643;
    position: sticky;
    background: white;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
}

.logo img{
    width: 80%;
}


</style>