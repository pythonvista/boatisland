import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "",
    user: false,
    activeUser: null,
    Navlinks: [
      {title: "Explore",  url: "/explore", icon:"mdi-account-supervisor-circle"},
      {title:"Create", url: "/battles", icon: "mdi-axe-battle"},
    
     ],

     dropdown:[
      {title: "Home", icon:"home", url:"/home"},
      {title: "Dashboard", url: "/dashboard", icon:"mdi-view-dashboard"},
      {title: "Login", url: "/login", icon:"mdi-login"},
      {title: "Create an account", url: "/register", icon: "mdi-account-plus"},

     ],

     account:{title: "Account",url:"/account", icon:"mdi-account-circle"},
     discover:{title: "Discover", icon:"mdi-electron-framework"},

     MobAccount: [
      { text: 'Profile', url: "/login", icon:"mdi-account" },
      { text: 'Collections', url: "/signup", icon: 'mdi-account-plus' },
      { text: 'Wallet', icon: 'mdi-wallet' },
      { text: 'Libary', icon: 'mdi-play-box-multiple-outline', url:'/libary' },
    ],
     SideNav: [
      { text: 'Home', icon: 'home', url: '/' },
      { text: 'Explore',  url: "/explore", icon:"mdi-magnify" },
      { text: 'Create', url: "/create", icon: 'mdi-axe-battle' },

    ],

    disapi:[
      {title:"Tchapo", img:"img/boat1.png", url:""},
      {title:"Boat of the day", img:"img/bg.png", url:""},
      {title:"Nfts Collectible", img:"img/boat3.png", url:""},
      {title:"Music Collection", img:"img/boat4.png", url:""}
    ]


  },

  getters: {},
  mutations: {
    SET_ACTIVE_USER(state, payload) {
      localStorage.setItem("activeUser", JSON.stringify(payload));
      state.activeUser = payload;
    },
    
    SET_USER_ROLE(state, payload) {
      localStorage.setItem("UserRole", JSON.stringify(payload));
      state.role = payload;
    },

    REMOVE_ACTIVE_USER(state, payload) {
      localStorage.removeItem("activeUser");
      state.activeUser = payload;
    },
    
    REMOVE_USER_ROLE(state, payload) {
      localStorage.removeItem("UserRole");
      state.role = payload;
    },

  },
  actions: {
    UserRole({ commit }, payload) {
      commit("SET_USER_ROLE", payload);
    },

    ActiveUser({ commit }, payload) {
      commit("SET_ACTIVE_USER", payload);
    },

    RemoveRole({ commit }, payload) {
      commit("REMOVE_USER_ROLE", payload);
    },

    RemoveUser({ commit }, payload) {
      commit("REMOVE_ACTIVE_USER", payload);
    },
  },
  modules: {},
});

