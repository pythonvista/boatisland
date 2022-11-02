<template>
    <div class="mt-2">
        <section class="d-flex justify-center align-center w-full"
            style="background-color: rgba(239, 231, 231, 0.514);">
            <div id="int" class="d-flex justify-center align-center">
                <div
                    class="intrest  d-flex flex-column justify-content-center align-content-center text-center">
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

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

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


</style>