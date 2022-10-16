<template>
    <div class="">
        <section v-show="false" class="pt-3 pb-3">
            <div class="container-fluid genere d-flex  w-100">
                <div class="gen">Music</div>
                <div class="gen">Films/Videos</div>
                <div class="gen">Visual Arts</div>
                <div class="gen">Ebooks </div>
                <div class="gen">Podcasts/Audio files</div>
                <div class="gen">Gifs</div>


            </div>
        </section>
        <section class="pa-0 ma-0">
            <div class="py-2 px-2 ma-0">
                <h4 class="text-left">Top Selling Works</h4>
            </div>
            <div class="selling d-flex px-2 ">
                <div class="sell_box " v-for="(i, index) in 23" :key="index">
                    <div class="sell position-relative" style="background-image: url(img/abu1.jpg);">
                        {{i}}
                        <div class="b_box d-flex ">
                            <i class="fas fa-heart"></i><span>50</span>
                        </div>
                    </div>
                    <div class="sell_text ">
                        <h6 class="p-0 m-0 pt-1">Music</h6>
                        <h4 class="pt-2 p-0 m-0">Beyond the edge</h4>
                        <h5 class="p-0 m-0">Okiki Olanlesi</h5>
                    </div>
                </div>
            </div>
        </section>

        <section class="d-flex justify-center align-center my-2 pa-4" style="background-color: rgba(239, 231, 231, 0.514);">
            <div id="int" class="d-flex justify-center align-center">
                <div
                    class="container intrest  d-flex flex-column justify-content-center align-content-center text-center">
                    <div class="circle p-2">
                        <div class="circle1" style="background-image: url(img/int1.jpg);"></div>
                        <div class="circle2" style="background-image: url(img/int2.webp);"></div>
                        <div class="circle3" style="background-image: url(img/int5.jfif);"></div>
                        <div class="circle4" style="background-image: url(img/int3.jpg);"></div>
                        <div class="circle5" style="background-image: url(img/int1.jpg);"></div>
                    </div>
                    <h4 class="m-0 p-0">Tell us what you are intrested in</h4>
                    <p class="">We'll make sure you have a good time here.</p>
                    <span><a href="#" onclick="genere();" class=" lets text-decoration-none text-dark ">LET'S
                            GO</a></span>

                </div>
            </div>
            <!-- <div id="int2">
                <h3 class="text-left px-2">Categories</h3>
                <div
                    class="container-fluid intrest m-0 p-0 p-4 d-flex flex-column justify-content-center align-content-center text-center">

                    <div class="container-fluid genere d-flex flex-grow-1 gap-2   w-100">
                        <div class="gen">Music</div>
                        <div class="gen">Films</div>
                        <div class="gen">Visual Arts</div>

                    </div>
                    <div class="container-fluid genere d-flex gap-2 pb-2 flex-grow-1 w-100">

                        <div class="gen">Ebooks </div>
                        <div class="gen">Podcasts/Audio files</div>

                    </div>
                    <div class="container-fluid genere d-flex gap-2 pb-2 flex-grow-1 w-100">

                        <div class="gen">Visual Arts</div>
                        <div class="gen">Ebooks </div>

                        <div class="gen">Gifs</div>
                    </div>
                    <span class="d-flex justify-content-end"><a href="#" onclick="done();"
                            class=" lets text-decoration-none text-dark ">Done</a></span>

                </div>
            </div> -->

        </section>

        <section class="container-fluid w-100 pa-0 ma-0 ">
            <div class="container pa-0 ma-0">
                <h4 class="text-left py-0 px-2 ma-0">Trending</h4>
            </div>
            <div class="container-fluid selling d-flex px-2">
                <div class="sell_box" v-for="(i, index) in 20" :key="index">
                    <div class="sell  position-relative" style="background-image: url(img/abu4.jpg);">
                        {{i}}
                        <div class="b_box d-flex justify-content-center position-absolute align-items-center gap-2">
                            <i class="fas fa-heart"></i><span>50</span>

                        </div>

                    </div>
                    <div class="sell_text ">
                        <h6 class="p-0 m-0 pt-1">Music</h6>
                        <h4 class="pt-2 p-0 m-0">Ocean</h4>
                        <h5 class="p-0 m-0">Blues Rock</h5>
                    </div>
                </div>
            </div>
        </section>

        <section class="container-fluid w-100 m-0 p-0 pt-2 pb-2">
            <div class="container  p-0 m-0">
                <h4 class="text-center px-2 py-2">Popular Boats</h4>
            </div>
            <div class="container-fluid popular d-flex px-2">
                <div class="sell_box ">
                    <div class="sell position-relative" style="background-image: url(img/tchapo.webp);">
                    </div>
                    <div class="sell_text ">
                        <h4 class="pt-2 p-0 m-0 text-center">Tchapo</h4>

                    </div>
                </div>

                <div class="sell_box ">
                    <div class="sell position-relative" style="background-image: url(img/sherif.jpg);">
                    </div>
                    <div class="sell_text ">
                        <h4 class="pt-2 p-0 m-0 text-center">Black Sherif</h4>
                    </div>
                </div>

                <div class="sell_box" v-for="(i,index) in 20" :key="index">
                    {{i}}
                    <div class="sell position-relative" style="background-image: url(img/avamax.png);">
                    </div>
                    <div class="sell_text ">
                        <h4 class="pt-2 p-0 m-0 text-center">Ava Maxx</h4>
                    </div>
                </div>

                <div class="sell_box ">
                    <div class="sell position-relative" style="background-image: url(img/shawn.jpg);">
                    </div>
                    <div class="sell_text ">
                        <h4 class="pt-2 p-0 m-0 text-center">Shawn Mendes</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid m-0 p-0 pt-1 px-2 pb-1">
            <div class="">
                <h4 class="lead-3">Boat Of The Day</h4>
            </div>
            <div class=" boat_day">
                <img src="img/boat_day.jpg">
            </div>

        </section>
        <section class="container-fluid m-0 p-0  m-2 populary ">
            <div class="">
                <h4 class="lead-2 px-2">Popular Searches</h4>
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
    name: 'dashboard'

}
</script >

<style scoped>
.he-10 {
    height: 10vh;
}

.he-15 {
    height: 15vh;
}

.he-20 {
    height: 20vh;
}

.he-25 {
    height: 25vh;
}

.he-30 {
    height: 30vh;
}

.he-50 {
    height: 50vh;
}

.he-80 {
    height: 90vh;
}

.he-100 {
    height: 100vh;
}

.bd-red {
    border: 2px solid red !important;
}

.bd-blue {
    border: 2px solid yellow;
}

.bd-black {
    border: 2px solid black;
}

.sticky {
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 2;
    background-color: white;
}

.carousel-item {
    height: 100% !important;
}

.custom_border {
    border: 1px solid white;
    border-radius: 6px;
    color: white;
}

.abs::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.539);
    top: 0;
    left: 0;
    z-index: 1;
}

.tp {
    top: 84%;
}

.container {
    width: 100%;
    padding: 12px 0 !important;
    margin-right: auto;
    margin-left: auto;

}

.capt {
    top: 60%;
    z-index: 4;
    margin: 0 auto;
}

.round {
    width: 8px !important;
    height: 8px !important;
    border-radius: 100%;
}

.b-out {
    z-index: 200;
}

.head {
    position: absolute;
    width: 100%;
    height: 9vh;
    z-index: 2;
    top: 0;
    left: 0;
}

.frm label {
    font-size: 1.1rem;
    margin: 9px 0;
}

.frm input {
    height: 50px;
    border: 2px solid rgba(0, 0, 0, 0.521);
    border-radius: 6px;
}

.tx_hd {
    border-bottom: 2px solid black;
}

.tx_hu {
    border-top: 2px solid black;
}

.cre {
    border-color: transparent !important;
    outline: none;
    text-align: center;
    color: #dc1e1e;
    font-size: 50px;
    border-radius: 0 !important;
    border-bottom: 2px solid rgba(12, 12, 12, 0.626) !important;
    width: 100%;
    -webkit-text-security: disc;
}

.numbers div {
    display: inline-block;
    border-radius: 1px;
    width: 90px;
    text-align: center;
    padding: 20px;
    margin: 10px 4px 10px 0;
    cursor: pointer;
    color: red;
    font-size: large;
    -webkit-transition: border-color .2s ease-in-out, background-color .2s, -webkit-box-shadow .2s;
    transition: border-color .2s ease-in-out, background-color .2s, -webkit-box-shadow .2s;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s, -webkit-box-shadow .2s;
}

.numbers .button:hover {
    background-color: rgba(203, 8, 8, 0.852);
    color: white;
}

.btnn {
    background-color: transparent !important;
    border: unset !important;
    color: red;
}

.header {
    padding: 13px !important;
}

.logo {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.nav {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    gap: 25px;
    font-size: 18px;
}

header {
    margin: 0 !important;
    padding: 0 !important;
}

.box {
    width: 18px;
    height: 18px;
    background-color: red;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-size: 0.7rem;
    right: -12px;
    top: -10px;
}

.genere {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-preferred-size: 40px;
    flex-basis: 40px;
    -ms-flex-line-pack: center;
    align-content: center;
    width: auto !important;
    overflow: hidden;
    overflow-x: scroll;
    gap: 10px;
    margin: 0 !important;
}



.genere::-webkit-scrollbar {
    display: none;
}

.gen {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    padding: 0.1em 1.4em;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.297);
    border: 1px solid grey;
    border-radius: 20px;
}

.imgg {
    margin-left: -20px !important;
}

.gen h5 {
    margin: 0 !important;
    font-size: 0.7rem;
}

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
    min-height: 22vh !important;
    overflow-x: scroll;
    margin: 0 !important;
    gap: 0.8rem;
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
    width: 150px;
    height: 240px;
    overflow: hidden;
    border: 1px solid orange;
    border-radius: 8px;
}


.sell {
    position: relative;
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
    padding: 0 0.5rem;
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
    border: 1px solid red;
    border-radius: 10px;
    bottom: 3%;
    right: 3%;
    font-size: 10px;
}

.intrest {
    /* min-height: 30vh; */
    padding: 2rem 0 !important;
}

.intrest h4 {
    font-size: 0.9rem;
}

.intrest p {
    font-size: 0.8rem;
    font-weight: 400;
}

.intrest .circle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1px;
}

.intrest .circle .circle2 {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    margin-top: -10px;
}

.intrest .circle .circle3 {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    margin-top: -30px;
    z-index: 1;
}

.intrest .circle .circle4 {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    margin-top: -10px;
}

.intrest .circle div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
}

.intrest .lets {
    background-color: rgba(228, 234, 238, 0.475);
    padding: 2px 7px;
    border: 1px solid rgba(255, 0, 0, 0.441);
    border-radius: 15px;
}

#int2 {
    display: none;
}

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
    width: 150px;
    height: 200px;
}

.popular .sell_box .sell_text h4 {
    font-size: 0.9rem;
}

.popular .sell {
    height: 75%;
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

.boat_day {
    max-height: 500px;
    max-width: 50%;
    min-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.boat_day img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.populary {
    overflow: hidden;
    width: auto;
    margin-bottom: 10vh !important;
    
}

.populary .search {
    width: auto;
    overflow-x: scroll;
}

.populary .search .search_bar {
    height: 50%;
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

.mobile_menu {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: white;
    z-index: 2;
}

.mob_nav {
    position: fixed;
    width: 100%;
    border-top: 2px solid red;
    bottom: 0;
    right: 0;
    z-index: 2;
    padding: 0.4em 0;
    background-color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1.2rem;
}

.mob_nav div {
    cursor: pointer;
    -webkit-transition: 0.8s;
    transition: 0.8s;
}

.mob_nav div:hover {
    padding: 0.4em 0.65em;
    background-color: rgba(255, 0, 0, 0.715);
    color: white;
    border-radius: 50%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}

.checked {
    padding: 0.4em 0.65em;
    background-color: rgba(255, 0, 0, 0.715);
    color: white;
    border-radius: 50%;
}
</style>