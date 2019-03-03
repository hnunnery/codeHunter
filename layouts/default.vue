<template>
  <v-app dark class="app">
    <v-toolbar app dense scroll-off-screen>
      <v-flex class="text-xs-center text-md-left">
        <nuxt-link to="/">
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_120/v1532905479/simpleLogo.png"
            alt="logo"
            id="navbar-logo"
            class="pt-1 ml-4"
          >
        </nuxt-link>
      </v-flex>
      <!-- NAVBAR FOR MEDIUM AND UP SCREEN SIZES -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <a href="#top">
            <v-icon class="primary--text mr-1">fas fa-home</v-icon>
            <span class="white--text nav-link">Home</span>
          </a>
        </v-btn>
        <v-btn flat>
          <a href="#services">
            <v-icon class="primary--text mr-1">fas fa-code</v-icon>
            <span class="white--text nav-link">Services</span>
          </a>
        </v-btn>
        <v-btn flat>
          <a href="#portfolio">
            <v-icon class="primary--text mr-1">fas fa-folder-open</v-icon>
            <span class="white--text nav-link">Portfolio</span>
          </a>
        </v-btn>
        <v-btn flat>
          <a href="#reviews">
            <v-icon class="primary--text mr-1">fas fa-comments</v-icon>
            <span class="white--text nav-link">Reviews</span>
          </a>
        </v-btn>
        <v-btn flat>
          <a href="#about">
            <v-icon class="primary--text mr-1">fas fa-user-circle</v-icon>
            <span class="white--text nav-link">About</span>
          </a>
        </v-btn>
        <v-btn flat>
          <a href="#contact">
            <v-icon class="primary--text mr-1">fas fa-at</v-icon>
            <span class="white--text nav-link">Contact</span>
          </a>
        </v-btn>
      </v-toolbar-items>
      <!-- NAVBAR FOR SMALL AND EXTRA SMALL SCREEN SIZES -->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      clipped
      temporary
      width="170"
      :right="right"
      v-model="rightDrawer"
      class="hidden-md-and-up"
      fixed
      app
    >
      <v-list class="mt-5">
        <a href="#top">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">HOME</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="#services">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">SERVICES</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="#portfolio">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-folder-open</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">PORTFOLIO</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="#reviews">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-comments</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">REVIEWS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="#about">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-user-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">ABOUT</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <a href="#contact">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-at</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">CONTACT</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>

        <v-divider class="my-2"></v-divider>

        <v-list-tile value="true" href="https://www.linkedin.com/in/hunternunnery" target="_blank">
          <v-list-tile-action>
            <v-icon class="white--text">fab fa-linkedin</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">LINKED IN</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile value="true" href="https://facebook.com/codehunterweb" target="_blank">
          <v-list-tile-action>
            <v-icon class="white--text">fab fa-facebook</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">FACEBOOK</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile value="true" href="https://www.twitter.com/HunterNunnery" target="_blank">
          <v-list-tile-action>
            <v-icon class="white--text">fab fa-twitter-square</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">TWITTER</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile value="true" href="https://github.com/hnunnery" target="_blank">
          <v-list-tile-action>
            <v-icon class="white--text">fab fa-github-square</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">GITHUB</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          value="true"
          href="https://www.youtube.com/channel/UCn6R2guTsqRTKAz1SUWI7Uw"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon class="white--text">fab fa-youtube-square</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">YOUTUBE</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer>
      <v-card color="#1c1c1c" class="flex text-xs-center py-3" flat tile>
        <div>
          <v-btn
            icon
            href="https://www.linkedin.com/in/hunternunnery"
            target="_blank"
            rel="noopener"
            class="mx-3"
          >
            <v-icon size="32px">fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.facebook.com/codehunterweb"
            target="_blank"
            rel="noopener"
            class="mx-3"
          >
            <v-icon size="32px">fab fa-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.twitter.com/HunterNunnery"
            target="_blank"
            rel="noopener"
            class="mx-3"
          >
            <v-icon size="32px">fab fa-twitter</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://github.com/hnunnery"
            target="_blank"
            rel="noopener"
            class="mx-3"
          >
            <v-icon size="32px">fab fa-github</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.youtube.com/channel/UCn6R2guTsqRTKAz1SUWI7Uw"
            target="_blank"
            rel="noopener"
            class="mx-3"
          >
            <v-icon size="32px">fab fa-youtube-square</v-icon>
          </v-btn>
        </div>
        <v-card-actions class="justify-center b-align mt-3">
          <p>
            &copy;2019 —
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

.nav-link {
  font-size: 20px;
  text-transform: capitalize;
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
