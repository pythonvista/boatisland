<template>
  <div class="profile_wrap flex flex-col justify-start item-start gap-2">
    <div class="flex contain flex-row items-start justify-between gap-1 mt-2">
        <div class="user-info flex py-3 flex-col gap-1 justify-start items-center">
            <div class="logo flex justify-center items-center ">
                <img src="img/tchapo.webp" alt="">
            </div>
            <p class="ma-0 pa-0 font-bold text-lg">Uche Mulumba</p>
            <p class="ma-0 pa-0 font-light text-base">@uchemuluba</p>
            <v-btn outlined  small color="orange" ><span class="black--text"> Edit profile</span></v-btn>
            <p class="ma-0 pa-0 font-light text-sm">Following: 72</p>
        </div>
        <div class="wallet-info flex justify-center items-center">

        </div>

    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-info{
    width: 50%;
    height: 100%;

}
.logo{
    /* border: 1px solid red; */
    overflow: hidden;
    border-radius: 50%;
    height: 120px;
    width: 120px;


    
}
.logo img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.wallet-info{
    border: 1px solid red;
    width: 50%;
    height: 100%;
}

.contain{
    /* border: 1px solid black; */
    height: 35vh;
}

</style>