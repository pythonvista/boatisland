<template>
    <div class="">
        <categoriesVue />
        <cardsVue :title="title"></cardsVue>
        <intrestsVue></intrestsVue>
        <cardsVue :title="title2"></cardsVue>
        <popularboat></popularboat>
        <boatday></boatday>
        <popsearchVue></popsearchVue>

        <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" height="auto">
                <!-- <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
                    close
                </v-btn> -->
                <div class="py-3 flex flex-row items-center justify-evenly">
                    <v-btn text small class="flex-1">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>
                    <v-btn text small class="flex-1">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn text small class="flex-1">
                        <v-icon>mdi-play-box-multiple-outline</v-icon>
                    </v-btn>
                    <v-btn text small class="flex-1">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </div>
            </v-sheet>
        </v-bottom-sheet>

    </div>
</template>

<script>
import categoriesVue from "@/components/utility/categories.vue";
import cardsVue from "../utility/cards.vue";
import intrestsVue from "../utility/intrests.vue";
import popularboat from '@/components/utility/popularboat.vue'
import boatday from '@/components/utility/boatDay.vue'
import popsearchVue from "../utility/popsearch.vue";
import {mob_nav,} from '@/main.js'
export default {
    name: 'index',
    components: {
        categoriesVue,
        cardsVue,
        intrestsVue,
        popularboat,
        boatday,
        popsearchVue
    },
    data: () => ({
        title: 'Top selling works',
        title2: 'Trending',
        sheet: false,
    }),
    created() {
        mob_nav.$on("mob-nav", () => {
            this.sheet = true
        });
    }
}
</script>

<style scoped>

</style>