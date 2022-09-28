import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "",
    user: false,
    activeUser: null,
    Navlinks: [
      {title: "Challenges",  url: "/Challenges", icon:"mdi-account-supervisor-circle"},
      {title:"Battles", url: "/battles", icon: "mdi-axe-battle"},
    
     ],

     dropdown:[
      {title: "Home", icon:"home", url:"/"},
      {title: "Dashboard", url: "/dashboard", icon:"mdi-view-dashboard"},
      {title: "Login", url: "/login", icon:"mdi-login"},
      {title: "Create an account", url: "/register", icon: "mdi-account-plus"},

     ],

     account:{title: "Account",url:"/account", icon:"mdi-account-circle"},
     discover:{title: "Discover", icon:"mdi-electron-framework"},

     MobAccount: [
      { text: 'Login', url: "/login", icon:"mdi-login" },
      { text: 'Create Account', url: "/signup", icon: 'mdi-account-plus' },
      { text: 'Sign-out', icon: 'mdi-logout' },
    ],
     SideNav: [
      { text: 'Home', icon: 'home' },
      { text: 'Challenges',  url: "/Challenges", icon:"mdi-account-supervisor-circle" },
      { text: 'Battles', url: "/battles", icon: 'mdi-axe-battle' },

    ],

    disapi:[
      {title:"Code Battle 2020", img:"img/images.jfif", url:""},
      {title:"Code Combat Ai League", img:"img/code2.png", url:""},
      {title:"Dawn of the Code War", img:"img/code3.jfif", url:""},
      {title:"Javascript Basic Challenge", img:"img/code4.png", url:""}
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

