<template>
    <div class="wrap flex flex-col justify-end items-start px-4 py-10">
        <div class="content w-full gap-3 justify-center items-center flex flex-col">
            <img  src="@/assets/img/mlogo.png" alt="">
            <v-btn large class="w-full">Login</v-btn>
            <v-btn large class="w-full">Get started</v-btn>
        </div>
    </div>
</template>

<script>
import { bnav } from "@/main.js"; // 
export default {
    created() {
        bnav.$emit("switch", (false))

    },
    data: ()=>({
        
    }),
}
</script>

<style scoped>

.wrap {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.587), rgba(0, 0, 0, 0.5)), url('@/assets/img/screen1.jpg');
    background-size: cover;
    background-position: center center;
}
</style>