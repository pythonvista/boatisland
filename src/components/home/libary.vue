<template>
    <div class="libary_wrap flex flex-col justify-start py-3 px-2 gap-2">
        <p class="ma-0 pa-0 font-bold text-xl">Your Libary</p>
        <div class="flex flex-col gap-4 justify-start items-start">

            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed  class="py-5 shadow" color="white">
                        <v-icon class="">mdi-music</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">Music</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed  class="py-5 shadow" color="white">
                        <v-icon class="">mdi-video</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">Short film</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>

            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed class="py-5 shadow"  color="white">
                        <v-icon class="">mdi-drawing</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">Visual Arts</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed class="py-5 shadow"  color="white">
                        <v-icon class="">mdi-book</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">E-books</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>

            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed class="py-5 shadow"  color="white">
                        <v-icon class="">mdi-document</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">Writings Newsletter</p>
                </div>

                <v-icon>mdi-chevron-right</v-icon>

            </div>
            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row items-center justify-start gap-2">
                    <v-btn depressed class="py-5 shadow"  color="white">
                        <v-icon class="">mdi-document</v-icon>
                    </v-btn>
                    <p class="ma-0 pa-0 text-lg font-light">Writings Newsletter</p>
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