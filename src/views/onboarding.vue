<template>
    <div class="wrap">
        <div ref="swiper" class="swiper relative">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide screens" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.543), rgba(0, 0, 0, 0.626)), url(' + n.img + ')' }" v-for="(n, index) in screens" :key="index">

                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination absolute mt-3"></div>
        </div>
    </div>
</template>

<script>

import Swiper, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { bnav } from "@/main.js"; // 
export default {
    created() {
        bnav.$emit("switch", (false))

    },
    data: ()=>({
        screens:[
            {img: require('@/assets/img/screen1.jpg'), title: 'WELCOME TO BOAT ISLAND', descrption: 'Experience mind-blowing creativity.', skip:true},
            {img: require('@/assets/img/screen2.jpg'), title: 'EXPLORE THE ISLAND', descrption: 'Find digital products from your favorite creatives.', skip:true},
            {img: require('@/assets/img/screen23.jpg'), title: 'BECOME A BOAT', descrption: 'Build your profile and start selling your products.', skip:true},
            {img: require('@/assets/img/screen3.jpg'), title: 'BECOME AN ISLANDER', descrption: 'Buy products and have them instantly saved to your library.', skip:false}
        ]
    }),
    mounted() {
        new Swiper(this.$refs.swiper, {
            // configure Swiper to use modules
            modules: [Pagination, Navigation],
            // loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })

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
  background-position: center;
}

.swiper-pagination{
    position: absolute !important;
    bottom: 60px !important;
}
</style>