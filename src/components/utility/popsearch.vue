<template>
    <div class="mt-3 px-1">
        <section class=" populary ">
            <div class="">
                <hp class="font-bold px-2">Popular Searches</hp>
            </div>
            <div class="search  d-flex flex-column h-100">

                <div class="search_bar d-flex">
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/int2.webp">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>Hip Hop</h3>
                        </div>

                    </div>
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/tchapo.webp">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>Tchapo</h3>
                        </div>

                    </div>
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/int1.jpg">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>Music</h3>
                        </div>
                    </div>


                </div>
                <div class="search_bar d-flex">
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/avamax.png">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>Ava</h3>
                        </div>
                    </div>
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/int3.jpg">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>PodCast</h3>
                        </div>
                    </div>
                    <div class="bar_box ">
                        <div class="div_img">
                            <img src="img/shawn.jpg">
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <h3>Shawn</h3>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<script>
export default {

}
</script>

<style soped>

.populary {
    overflow: hidden;
    width: auto;
    /* margin-bottom:; */
    
}

.populary .search {
    width: auto;
    overflow-x: scroll;
}

.populary .search .search_bar {
    height: 30%;
    width: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    gap: 5px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.populary .search .search_bar .bar_box {
    width: 200px;
    height: 60px;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 5px;
    border-radius: 15px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 5px;
    background-color: rgba(250, 235, 215, 0.47);
}

.populary .search .search_bar .bar_box .div_img {
    width: 30%;
    height: 100%;
}

.populary .search .search_bar .bar_box .div_img img {
    width: 100%;
    height: 100%;
}

.populary .search .search_bar .bar_box div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.populary .search .search_bar .bar_box div h3 {
    font-size: 1rem;
    margin-top: 10px;
}

.populary .search .search_bar.search::-webkit-scrollbar {
    display: none;
}

.populary.populary::-webkit-scrollbar {
    display: none;
}

.search::-webkit-scrollbar {
    display: none;
}

</style>