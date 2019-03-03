const pkg = require("./package");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "codeHunter Web Design and Development",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "author", name: "author", content: pkg.author },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "codehunter, code, hunter, nunnery, web, design, development, create, make, build, freelance, freelancer, hire, coder, coding, progressive, web, app, apps, application, applications, pwa, programming, programmer, san, antonio, small, business, affordable, quality, best, recommended, site, page, website, webpage, online, make"
      },
      { property: "og:title", content: "Need a Website?" },
      {
        property: "og:description",
        content: "I build modern websites with a mobile-first approach."
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1533697556/codeHunter_Card.jpg"
      },
      { property: "og:url", content: "https://www.codehunter.io" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      }
    ]
  },
  /*
   ** loads new pages at top of page
   */
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl", "aos/dist/aos.css", "assets/styles.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/vuetify",
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/scrollspy", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor: ["aos"]
  }
};
