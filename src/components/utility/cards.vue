<template>
    <section class="pa-0 ma-0">
        <div class="py-2 px-2 ma-0">
            <p class="text-left ma-0 pa-0 font-bold">{{title}}</p>
        </div>
        <div class="selling d-flex px-2  ">
            <div class="sell_box " v-for="(i, index) in 23" :key="index">
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
    </section>

</template>

<script>

export default {
    name:'cards',
    props:['title', 'items']

}
</script>

<style scoped>
.selling {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    /* -ms-flex-preferred-size: 40px;
      flex-basis: 40px; */
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: auto !important;
    height: auto !important;
    overflow: hidden;
    height: 250px !important;
    overflow-x: scroll;
    margin: 0 !important;
    gap: 1rem;
}

.selling.selling::-webkit-scrollbar {
    display: none;
}

.selling .sell_box {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 160px;
    height: 100%;
    overflow: hidden;
    background: white;
}


.sell {
    position: relative;
    height: 75%;
}

.selling .sell_box .sell_text h6 {
    font-size: 0.7rem;
}

.selling .sell_box .sell_text h4 {
    font-size: 0.9rem;
}

.selling .sell_box .sell_text h5 {
    font-size: 0.7rem;
}

.sell_text {
    /* padding: 0 0.5rem; */
    height: 25%;
    gap: 2.3px;
}

.selling .sell {
    height: 70%;
    background-size: cover;
    background-position: center center;
}

.selling .b_box {
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