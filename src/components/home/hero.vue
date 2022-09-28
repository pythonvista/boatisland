<template>
    <div class="hero_wrap ">
        <v-container  class="elevation-0 ">
            <v-layout wrap row class="pb-2">
                <v-flex xs12 sm6 md-6 lg6 class="content">
                    <v-content class="content ">
                        <div class="pb-2 pt-4">
                            <h1 class="black--text pb-1 maintext  ">
                                Discover, Sell,<br> And Explore
                                exclusive digital items
                            </h1>
                            <h4 class="black--text infotext">Boat island is a digital marketplace for collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</h4>
                        </div>
                        <div class="">
                            <div class="d-block">
                                <v-btn color="#FF7643" class="white--text">
                                    <v-icon color="white" left>{{discover.icon}}</v-icon> Discover
                                </v-btn>
                            </div>

                            <div class="socials mt-4">
                                <v-icon class="mr-3 ic" color="#FF7643">facebook</v-icon>
                                <v-icon class="mr-3 ic" color="#FF7643">discord</v-icon>
                                <v-icon class="mr-3 ic" color="#FF7643">whatsapp</v-icon>
                            </div>
                        </div>

                    </v-content>

                </v-flex>
                <v-flex xs12 sm6 md-6 lg6 class="hero_img">
                    <v-content class="hero_img h-100 d-flex justify-center align-center">
                        <div class=" img-card">
                            <div class="img-wrap">
                               
                            </div>
                            <div class="img-text d-flex align-center ">
                                <p class="ma-0 white--text text-h6">Boat of the day</p>
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

