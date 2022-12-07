<template>
    <div class="relative profile_wrap flex flex-col justify-start item-start gap-2">
        <div class="flex contain pa-3 flex-row items-start justify-between gap-1 mt-2">
            <div class="user-info flex py-3  flex-col gap-1 justify-start items-center">
                <v-avatar size="6rem">
                    <v-img src="@/assets/img/tchapo.webp"></v-img>
                </v-avatar>
                <p class="ma-0 pa-0 font-bold text-lg">Uche Mulumba</p>
                <p class="ma-0 pa-0 font-light text-base">@uchemuluba</p>
                <v-btn outlined small color="orange"><span class="black--text"> Edit profile</span></v-btn>
                <p class="ma-0 pa-0 font-light text-sm">Following: 72</p>
            </div>
            <div class="wallet-info flex justify-center items-center">
                <div class="bg-linear pa-5 w-full flex flex-col justify-center gap-1 items-center rounded-lg">
                    <p class="ma-0 pa-0 text-light">Balance:</p>
                    <div class="flex-row flex justify-center items-center gap-1">
                        <img class="" src="@/assets/shell.png" alt="">
                        <p class="ma-0 pa-0 font-medium text-white">2783</p>

                    </div>
                    <v-btn small outlined color="white" class="">go to wallet</v-btn>
                </div>
            </div>

        </div>
        <div class="tbs ">
            <v-tabs class="tabshead" v-model="tab" background-color="" color="orange" grow>
                <v-tab>
                    <p class="ma-0 pa-0 tab_title important">Whishlist</p>
                </v-tab>
                <v-tab>
                    <p class="ma-0 pa-0 tab_title important">Transactions</p>
                </v-tab>
            </v-tabs>
            <v-tabs-items class="tabsbody h-full ma-0" v-model="tab">
                <v-tab-item class="wishlist t-scrool px-2 py-6 border-2 border-solid">
                    <div v-for="(i, index) in 18" :key="index"
                        class="mb-3 w-full pa-3 flex flex-row items-center gap-3 hover:bg-slate-200 hover:shadow ">
                        <v-img max-width="50" src="@/assets/img/wishbg.png"></v-img>
                        <div class="flex flex-col justify-center items-start gap-1">
                            <p class="ma-0 pa-0 text-sm font-normal">Beyond the edge</p>
                            <p class="ma-0 pa-0 text-xs font-light">Okiki Olanlesi</p>
                        </div>
                        <v-btn text icon x-small><v-icon color="orange">mdi-cart</v-icon></v-btn>
                        <v-btn text icon x-small><v-icon color="orange">mdi-delete</v-icon></v-btn>
                        <div class="flex-row flex justify-center items-center gap-1">
                            <img class="" src="@/assets/img/shellorange.png" alt="">
                            <p class="ma-0 pa-0 font-medium text-black">2783</p>

                        </div>
                    </div>
                </v-tab-item>
                <v-tab-item class="wishlist t-scrool px-2 py-6 border-2 border-solid">
                    <div v-for="(i, index) in 18" :key="index"
                        class="mb-3 w-full pa-3 flex flex-row items-center gap-3 hover:bg-slate-200 hover:shadow ">
                        <v-img max-width="50" class="rounded-full" src="@/assets/img/wishbg.png"></v-img>
                        <div class="flex flex-col justify-center items-start gap-1">
                            <p class="ma-0 pa-0 text-sm font-normal">@okiki sent you</p>
                            <p class="ma-0 pa-0 text-xs font-light">Okiki Olanlesi</p>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="flex-row flex justify-center items-center gap-1">
                            
                            <p class="ma-0 pa-0 font-medium text-black">+2783</p>

                        </div>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: null
        }
    }
}
</script>

<style scoped>
.contain {
    /* height: 50vh; */
}

.user-info {
    width: 50%;
    height: 100%;

}

.tbs {
    /* height: 50vh; */
}

.tabshead {
    height: 15% !important;
    /* border: 2px solid black; */
    position: sticky !important;
    top: 0;
    left: 0;
    width: 100%;
}

.tabsbody {}

.t-scrool {
   
    overflow-y: scroll !important;
    overflow: hidden;
    height: 50vh;
}

.t-scrool::-webkit-scrollbar {
    display: none;
}

.logo {
    /* border: 1px solid red; */
    overflow: hidden;
    border-radius: 50%;
    height: 120px;
    width: 120px;



}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.wallet-info {
    width: 50%;
    height: 100%;
}

.contain {
    /* border: 1px solid black; */
    height: 35vh;
}

.tab_title {
}
</style>