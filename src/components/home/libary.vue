<template>
    <div class="libary_wrap flex flex-col justify-start py-3 px-2 gap-2">
        <p class="ma-0 pa-0 font-bold text-xl">Your Libary</p>
        <div class="flex flex-col gap-2 justify-start items-start">

            <div class="flex flex-row hover:shadow-md hover:bg-orange-100 px-2 py-3  items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                   
                        <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-music</v-icon>
                   
                    <p class="ma-0 pa-0 text-lg font-light">Music</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-video</v-icon>
                    <p class="ma-0 pa-0 text-lg font-light">Short film</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>

            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                   
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-drawing</v-icon>
                    <p class="ma-0 pa-0 text-lg font-light">Visual Arts</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                 
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-book</v-icon>
                    <p class="ma-0 pa-0 text-lg font-light">E-books</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>

            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-file-document</v-icon>
                    <p class="ma-0 pa-0 text-lg font-light">Writings Newsletter</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-microphone</v-icon>
                    <p class="ma-0 pa-0 text-lg font-light">Poadcast & Audio</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full hover:bg-orange-100 px-2 py-3  justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    
                    <v-icon class="px-5 py-2 bg-white shadow-md rounded-sm" color="black">mdi-image</v-icon>
                    <p class="ma-0 pa-0 text-l font-light">GIF  <span class="text-sm">91</span></p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'libary'

}
</script>

<style>

</style>