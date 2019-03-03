<template>
  <v-app dark class="app">
    <v-toolbar app dense scroll-off-screen>
      <v-flex class="text-xs-center">
        <nuxt-link to="/">
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_120/v1532905479/simpleLogo.png"
            alt="logo"
            id="navbar-logo"
            class="pt-1"
          >
        </nuxt-link>
      </v-flex>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer>
      <v-card color="#1c1c1c" class="flex text-xs-center" flat tile>
        <div>
          <v-btn
            icon
            href="https://www.linkedin.com/in/hunternunnery"
            target="_blank"
            rel="noopener"
          >
            <v-icon size="32px">fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn icon href="https://www.facebook.com/codehunterweb" target="_blank" rel="noopener">
            <v-icon size="32px">fab fa-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://www.twitter.com/HunterNunnery" target="_blank" rel="noopener">
            <v-icon size="32px">fab fa-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/hnunnery" target="_blank" rel="noopener">
            <v-icon size="32px">fab fa-github</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.youtube.com/channel/UCn6R2guTsqRTKAz1SUWI7Uw"
            target="_blank"
            rel="noopener"
          >
            <v-icon size="32px">fab fa-youtube-square</v-icon>
          </v-btn>
        </div>
        <v-card-actions class="justify-center b-align">
          <p>
            &copy;2018 —
            <span class="primary--text caption">code</span>Hunter Web Design and Development
          </p>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #212121;
  overflow: hidden;
}

// NAVBAR - size logo
#navbar-logo {
  max-width: 120px;
}

// NAVBAR - raising fontawesome5 icons
.fa,
.fab,
.fal,
.far,
.fas {
  @media only screen and (max-width: 958px) {
    vertical-align: text-top;
  }
}

aside.v-navigation-drawer {
  background: linear-gradient(90deg, #22aa00, #212121 36%, #212121);
}

// FOOTER - bottom aligns text in codeHunter
.b-align {
  vertical-align: bottom;
  line-height: 20px;
}
</style>
