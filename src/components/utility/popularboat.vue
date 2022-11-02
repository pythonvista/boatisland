<template>
  <div class="mt-4">
    <section class="w-100 ">
            <div class="">
                <p class="text-center ma-0 pa-0 font-bold">Popular Boats</p>
            </div>
            <div class="container-fluid popular d-flex px-2 py-3">
                <div v-for="(i ,index) in 6" :key="index" class="sell_box ">
                    <div class="sell position-relative" style="background-image: url(img/tchapo.webp);">
                    </div>
                    <div class="sell_text ">
                        <h4 class="pt-2 p-0 m-0 text-center">Tchapo</h4>

                    </div>
                </div>

            </div>
        </section>
  </div>
</template>

<script>
export default {

}
</script >

<style scoped>

.popular {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-preferred-size: 40px;
    flex-basis: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: auto !important;
    overflow: hidden;
    overflow-x: scroll;
    gap: 10px;
    margin: 0 !important;
    min-height: 25vh;
}

.popular.popular::-webkit-scrollbar {
    display: none;
}

.popular .sell_box {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 120px;
    height: 120px;
}

.popular .sell_box .sell_text h4 {
    font-size: 0.9rem;
}

.popular .sell {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}

.popular .b_box {
    background-color: rgba(240, 248, 255, 0.546);
    padding: 0.4px 4px;
    border: 1px solid red;
    border-radius: 10px;
    bottom: 5%;
    right: 2%;
    font-size: 10px;
}


</style>