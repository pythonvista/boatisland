<template>
  <div class="boat_wrap flex flex-col justify-start gap-2 px-3 mt-6">
            <div class="">
                <p class="pa-0 ma-0 font-bold  ">Boat Of The Day</p>
            </div>
            <div class=" boat_day grid grid-cols-1 place-items-center">
                <img src="img/boat_day.jpg">
            </div>
  </div>
</template> 

<script>
export default {

}
</script>

<style scoped>

.boat_day {
    max-height: 380px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.boat_day img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}


</style>