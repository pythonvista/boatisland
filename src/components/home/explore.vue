<template>
    <div class="wrap flex flex-col justify-start gap-2  py-2">
        <input type="text" class="search px-1 py-1" placeholder="Search the island">
        <categoriesVue></categoriesVue>
        <div class="release flex flex-col items-center mt-2">
            <p class="ma-0 pa-0 font-bold">New Release</p>
            <div class="grid grid-cols-2 place-items-center gap-2 mt-3">
                <div class="sell_box " v-for="(i, index) in 4" :key="index">
                    <div class="sell position-relative" style="background-image: url(img/abu1.jpg);">
                        {{ i }}
                        <div class="b_box d-flex ">
                            <i class="fas fa-heart"></i><span>50</span>
                        </div>
                    </div>
                    <div class="sell_text px-1  py-1  flex flex-col justify-center ">
                        <h6 class="pa-0 ma-0">Music</h6>
                        <h4 class="pa-0 ma-0">Beyond the edge</h4>
                        <h5 class="pa-0 ma-0">Okiki Olanlesi</h5>
                    </div>
                </div>
            </div>
            <v-chip>see more</v-chip>

        </div>
        <div class="release flex flex-col items-center mt-4">
            <p class="ma-0 pa-0 font-bold">Albums for you</p>
            <div class="grid grid-cols-2 place-items-center gap-2 mt-1">
                <div class="sell_box " v-for="(i, index) in 4" :key="index">
                    <div class="sell position-relative" style="background-image: url(img/abu1.jpg);">
                        {{ i }}
                        <div class="b_box d-flex ">
                            <i class="fas fa-heart"></i><span>50</span>
                        </div>
                    </div>
                    <div class="sell_text px-1  py-1  flex flex-col justify-center ">
                        <h6 class="pa-0 ma-0">Music</h6>
                        <h4 class="pa-0 ma-0">Beyond the edge</h4>
                        <h5 class="pa-0 ma-0">Okiki Olanlesi</h5>
                    </div>
                </div>
            </div>
            <v-chip>see more</v-chip>

        </div>
        <div class="release flex flex-col items-center mt-4">
            <p class="ma-0 pa-0 font-bold">Educational Ebooks</p>
            <div class="grid grid-cols-2 place-items-center gap-2 mt-1">
                <div class="sell_box " v-for="(i, index) in 4" :key="index">
                    <div class="sell position-relative" style="background-image: url(img/abu1.jpg);">
                        {{ i }}
                        <div class="b_box d-flex ">
                            <i class="fas fa-heart"></i><span>50</span>
                        </div>
                    </div>
                    <div class="sell_text px-1  py-1  flex flex-col justify-center ">
                        <h6 class="pa-0 ma-0">Music</h6>
                        <h4 class="pa-0 ma-0">Beyond the edge</h4>
                        <h5 class="pa-0 ma-0">Okiki Olanlesi</h5>
                    </div>
                </div>
            </div>
            <v-chip>see more</v-chip>

        </div>

    </div>
</template>

<script>
import categoriesVue from '../utility/categories.vue';
export default {
    name:'search',
    components:{
        categoriesVue
    }
    

}
</script>

<style scoped>
.search {
    border: 2px solid rgba(101, 91, 91, 0.539);
    width: 95%;
    margin: auto;
    border-radius: 3px;
}

 .sell_box {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 160px;
    height: 250px;
    overflow: hidden;
    background: white;
}


.sell {
    position: relative;
    height: 75%;
}

 .sell_box .sell_text h6 {
    font-size: 0.7rem;
}

 .sell_box .sell_text h4 {
    font-size: 0.9rem;
}

.sell_box .sell_text h5 {
    font-size: 0.7rem;
}

.sell_text {
    /* padding: 0 0.5rem; */
    height: 25%;
    gap: 2.3px;
}

.sell {
    height: 70%;
    background-size: cover;
    background-position: center center;
}

.b_box {
    background-color: rgba(240, 248, 255, 0.546);
    position: absolute !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4px 4px;
    border-radius: 10px;
    bottom: 3%;
    right: 3%;
    font-size: 10px;
}
</style>