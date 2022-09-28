<template>
  <v-navigation-drawer v-model="drawer" class="draw-wrap" absolute left temporary>
      <v-list class="scroll">

        <!-- nav bar menu on mobile without dropdowns -->

        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item class="items" v-for="(item, i) in SideNav" :key="i">
            <v-list-item-icon>
              <v-icon color="yellow" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text " v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <!-- end  nav bar menu on mobile without dropdowns -->

        <!-- nav bar menu on mobile with dropdowns -->

        <!-- account sctions -->

        <v-list-group :value="false" class="account" dark prepend-icon="prependIcon" append-icon="appendIcon">
          <v-icon slot="prependIcon" color="yellow">mdi-account-circle</v-icon>
          <v-icon slot="appendIcon" color="white">mdi-chevron-down</v-icon>
          <template v-slot:activator>
            <v-list-item-title class="white--text">Account</v-list-item-title>
          </template>
          <v-list-item-group v-model="selectedItem">
            <v-list-item class="items" v-for="(item, i) in  MobAccount" :key="i">
              <v-list-item-icon>
                <v-icon color="yellow" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text " v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

        </v-list-group>

        <!-- Discover sctions -->
        <v-list-group :value="true" class="account" dark prepend-icon="prependIcon" append-icon="appendIcon">
          <v-icon slot="prependIcon" color="yellow">{{discover.icon}}</v-icon>
          <v-icon slot="appendIcon" color="white">mdi-chevron-down</v-icon>
          <template v-slot:activator>
            <v-list-item-title class="white--text">{{discover.title}}</v-list-item-title>
          </template>
          <div class=" discover">
            <Discover />

          </div>
        </v-list-group>

        <!-- end of  nav bar menu on mobile without dropdowns -->

      </v-list>
    </v-navigation-drawer>
</template>

<script>
import Discover from "./home/Discover.vue";
import {bus} from "@/main.js"; // 
import { mapState } from 'vuex';
export default {
    name: "SideNav",
    component: {
        Discover
    },
    computed: {
        ...mapState(["SideNav", "MobAccount", "discover"])
    },
    data: () => ({
        drawer: false,
    }),
    created() {
        bus.$on("open", () => {
            this.drawer = !this.drawer;
        });
    },
    components: { Discover }
}
</script>

<style scoped>
/* Navigation drawer css styling */

.draw-wrap{
    color: white;
    background-color: #0D0D31 !important;
    width: 80% !important;
    overflow-y: scroll !important;
    height: 100vh !important;
}




.items{
    
    border-bottom: 1px solid grey;
    min-height: 10px !important;
   
    border: none;
}

.nav-items h3{
    font-size: 1.4rem;
    font-weight: 400;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.v-list-item__icon{
    color: white !important;
    padding: 0.5em 0.6em;
}

.account{
  min-height: 10px !important;
  padding: 0.5em 0.2em;
    overflow-y: scroll !important;
    
}


.v-list .v-list-item--active {
    color: inherit;
    
}

.v-list .v-list-item--active::before {
    content: '';
    position: absolute;
    width: 10% !important;
    height: 100% !important;
    background-color: yellow;
    clip-path: circle(35.6% at 0 50%);
    z-index: 1;
    
    
}

 .v-list-item--active::before {
    content: '';
    position: absolute;
    width: 10% !important;
    height: 100% !important;
    background-color: yellow;
    clip-path: circle(35.6% at 0 50%);
    z-index: 1;
    
    
}

.discover{
    height: 300px;
    margin-top: 10px;
}


/* Navigation drawer css styling */

</style>