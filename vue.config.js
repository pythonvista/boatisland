const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "BoatIsland",
    themeColor: "#FF7643",
    msTileColor: "#000000",
    start_url: "",
    display: "standalone",
    iconPaths: {
      faviconSVG: "./assets/img/logo.png",
      favicon32: "./assets/img/logo.png",
      favicon16: "./assets/img/logo.png",
      appleTouchIcon: "./assets/img/logo.png",
      maskIcon: "./assets/img/logo.png",
      msTileImage: "./assets/img/logo.png",
    },
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./src/service-worker.js",
      // ...other Workbox options...
    },
  },
});
