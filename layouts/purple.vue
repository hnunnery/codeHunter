<template>
  <v-app dark class="app">
    <v-toolbar app dense scroll-off-screen>
      <v-flex class="ml-4 text-xs-center">
        <nuxt-link to="/">
          <img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_120/v1534474642/codeHunter/purpleNavIcon.png"
            alt="logo"
            id="navbar-logo"
            class="pt-1"
          >
        </nuxt-link>
      </v-flex>
      <!-- NAVBAR FOR MEDIUM AND UP SCREEN SIZES -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">
          <v-icon class="mypurple--text">fas fa-home</v-icon>&nbsp; Home
        </v-btn>
      </v-toolbar-items>
      <!-- NAVBAR FOR SMALL AND EXTRA SMALL SCREEN SIZES -->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up">
        <v-icon>menu</v-icon>
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
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" router :to="item.link">
          <v-list-tile-action>
            <v-icon class="white--text" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
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

    <v-footer absolute class="footer">
      <v-card class="flex secondary text-xs-center" flat tile>
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
            <span class="mypurple--text caption">code</span>Hunter Web Design and Development
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
      items: [
        {
          icon: "fas fa-home",
          title: "HOME",
          link: "/"
        }
      ],
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
  align-items: center;
  display: block;
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
  background: linear-gradient(90deg, #610eaf, #212121 36%, #212121);
}

// FOOTER - bottom aligns text in codeHunter
.b-align {
  vertical-align: bottom;
  line-height: 20px;
}
</style>
