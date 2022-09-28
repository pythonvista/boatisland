<template>
    <div>
    
            <div class="post-wrap">
                <div v-for="post in disapi" :key="post.title" class="post">
                    <div class="img" :style="{ 'background-image': 'url(' + post.img + ')' }">
                    </div>
                    <div class="text">
                        <h3 class="caption">{{post.title}}</h3>
                        
                    </div>
                </div>
                <!-- <div class="post">
                    <div class="img" style="background-image: url('./img/images.jfif');">
                    </div>
                    <div class="text">
                        <h3 class="caption">text area 2</h3>
                    </div>
                </div> -->
            </div>
            <div class="navi">
                <v-icon color="#FF7643" class="prev">mdi-arrow-left-bold-circle</v-icon>
                <v-icon color="#FF7643" class="next">mdi-arrow-right-bold-circle</v-icon>
            </div>






    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Discover",

    data: () => ({

    }),

    computed:{
        ...mapState(['disapi'])
    },

    created() {

    },

    beforeMount() {
        var scripts = [
            "./js/discover.js"
        ];
        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script)
            document.head.appendChild(tag);
        });

    }

}
</script>




<style scoped src="../../assets/css/slider.css">