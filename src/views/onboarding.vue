<template>
    <div class="wrap">
        
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
    mounted() {
       

    }
}
</script>

<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding: 10px 0;
}

.wrap {
    border: 1px solid red;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.screens{
    height: 100vh;
  background-size: cover;
  /* background-position: center; */
}

.swiper-pagination{
    position: absolute !important;
    bottom: 60px !important;
}
</style>