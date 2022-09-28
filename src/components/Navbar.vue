<template>
  <!-- header app bar -->
  <v-app-bar outlined colored-border flat dark class="header  ">

    <v-row>
      <!-- logo side of header -->
      <v-col cols="3" class="col-xs-6 col-sm-3 col-lg-3 d-flex align-center mr-2-xs mr-2-sm ">
        <v-title class="d-flex align-center justify-center">
          <h2 class="">PythonV</h2>
        </v-title>
      </v-col>
      <!-- end of logo side of header -->
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <!-- search side of header -->
      <v-col cols="5" class=" justify-center align-center hidden-sm-and-down d-md-flex d-lg-flex d-xl-flex">
        <form class="w-80 search d-flex justify-center align-center" action="">
          <v-icon small>search</v-icon>
          <v-spacer></v-spacer>
          <input type="text" prepend-icon="search" placeholder="Search Battles, Challenges and Conquests"
            class="w-100 ">
        </form>
      </v-col>
      <!-- end of search side of header -->

      <!-- links side and route side of header -->
      <v-col cols="4" class="  justify-end align-center hidden-sm-and-down d-none d-md-flex d-lg-flex d-xl-flex  ">
        <!-- buttons for route side of header eg. contest, challenge and battle they are being looped over  -->
        <v-btn flat small class="mr-2 transparent" v-for="link in links" :to="link.url" :key="link.title">
          <v-icon left>{{ link.icon }}
          </v-icon>{{ link.title }}
        </v-btn>
        <!-- end of buttons for route side of header eg. contest, challenge and battle  -->

        <!-- dropdown side for account side  -->
        <template>
          <div class="text-center">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <!-- account icon for drop down menu -->
                <v-btn class="pa-0 transparent" v-bind="attrs" v-on="on">
                  <v-icon>{{ account.icon }}
                  </v-icon>
                </v-btn>
                <!-- end account icon for drop down menu -->
              </template>
              <!-- dropdown wrapper for styling each list  -->
              <div class="drop-wrap  ">
                <v-list class="transparent">
                  <v-list-item class="drop-list" v-for="(item, index) in dropdown" :key="index" :to="item.url">
                    <v-icon left color="yellow">{{ item.icon }}</v-icon>
                    <v-list-item-title>
                      <h4 class="white-text drop-text">{{ item.title }}</h4>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
              <!-- end dropdown wrapper for styling each list  -->

            </v-menu>
          </div>
        </template>
        <!-- end of dropdown side for account side  -->


        <v-spacer class="hidden-md-and-up"></v-spacer>
      </v-col>
      <!-- end of links side and route side of header -->

      <!-- mobile menu navigation for header  -->
      <v-btn @click="menu"
        class="transparent mr-2 pa-0  hidden-md-and-up  d-md-none d-lg-none d-xl-none d-sm-flex" fab depressed text
        right>
        <v-icon>menu</v-icon>
      </v-btn>
      
      <!-- <v-navigation-drawer v-model="drawer" class="z4 drawer">

      </v-navigation-drawer> -->
      <!-- end mobile menu navigation for header  -->

    </v-row>

  </v-app-bar>


</template>

<script>
import {bus} from "@/main.js"
import { mapState } from 'vuex';
export default {
  name: "Navbar",
  computed: {
    links() {
      return this.Navlinks;
    },
    ...mapState(['Navlinks', 'account', 'dropdown'])
  },

  data: () => ({
    drawer: true

    //
  }),

  methods: {
   menu(){
      bus.$emit("open");
    }

  }


}
</script>

<style scoped>
/* navbar header styles are all here  */
.header {
  background: transparent !important;
  z-index: 2;
  border: none !important;
  overflow: hidden;
}

.transparent {
  background: transparent;
}

.transparent {
  background: transparent;
}

.border {
  border: 2px solid red !important;
}

.w-100 {
  width: 100%;

}

/* end of navbar header styles are all here  */

/* dropdown wraper styling is here for the wraping and hover */

.drop-wrap {
  background: #191941 !important;
  border-radius: 5px !important;


}

.drop-list {
  border-left: 1px solid #FFC700;
  margin-bottom: 1px;
}

.drop-text {
  color: white !important;
}

/* end of dropdown wraper styling, wraping and hover */



/* Form search styling are all here for navbar */

.search {
  border: 1.5px solid #FFC700;
  padding: 0.135rem 0.5rem;
  border-radius: 1rem;
}

input {
  border: none;
  outline: none;
  caret-color: #FFC700;
  color: white;
  padding-left: 0.4rem;
}

input::placeholder {
  color: white;
  font-size: 0.8rem;
}

.w-80 {
  width: 80%;

}



/* Form search styling are all here for navbar */


.v-list .v-list-item--active::after {

    content: '';
    position: absolute;
    width: 10% !important;
    height: 100% !important;
    background-color: yellow;
   clip-path: circle(35.6% at 100% 50%);
    right: 0 !important;
    z-index: 1;
    
    
}
</style>

