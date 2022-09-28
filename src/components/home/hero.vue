<template>
    <div class="hero_wrap ">
        <v-container class=" ">
            <v-layout wrap row class="">
                <v-flex xs12 sm6 md-6 lg6 class="content">
                    <v-content class="content ">
                        <div class="pb-2 pt-4">
                            <h1 class="white--text pb-1 maintext  ">
                                Think, Solve,<br> Develop
                                And Win Big
                            </h1>
                            <h4 class="white--text infotext">Kinplus Challenge is the ultimate destination for worldwide
                                developer Tournament</h4>
                        </div>
                        <div class="">
                            <div class="d-block">
                                <v-btn>
                                    <v-icon left>{{discover.icon}}</v-icon> Discover
                                </v-btn>
                            </div>

                            <div class="socials mt-4">
                                <v-icon class="mr-3 ic" color="white">facebook</v-icon>
                                <v-icon class="mr-3 ic" color="white">discord</v-icon>
                                <v-icon class="mr-3 ic" color="white">whatsapp</v-icon>
                            </div>
                        </div>

                    </v-content>

                </v-flex>
                <v-flex xs12 sm6 md-6 lg6 class="hero_img ">
                    <v-content class="hero_img h-100 d-flex justify-center align-center">
                        <div class=" img-card">
                            <div class="img-wrap">
                                <img src="img/vs.png" class="vs"/>
                            </div>
                            <div class="img-text d-flex align-center ">
                                <p class="ma-0 white--text caption">Language Wars: PHP vs Node.JS </p>
                                <v-spacer></v-spacer>
                                <v-icon color="yellow">mdi-arrow-right-bold-circle</v-icon>
                            </div>
                        </div>

                    </v-content>

                </v-flex>
            </v-layout>
        </v-container>

    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Hero",
    computed: {
         ...mapState(['discover'])

    },
    


}
</script>
<!-- <style scoped src="../../assets/css/home.css"></style> -->
<style scoped src="../../assets/css/hero.css"></style>

<style scoped>



</style>

