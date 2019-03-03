<template>
  <v-container fluid class="mt-5">
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-xs-center px-2">
        <h2 class="primary--text display-3">- About Me -</h2>
      </v-flex>
      <v-flex xs12 md5 class="text-xs-center flex1 sections mt-5">
        <h1>Hunter Nunnery</h1>
        <h2 class="primary--text">Web Developer</h2>
        <v-flex class="hidden-sm-and-down md-up-list">
          <ul>
            <li>Husband and Father of a Two Year Old</li>
            <li>Active Duty United States Marine</li>
            <li>Florida State University Master's Student</li>
            <li>Living in San Antonio, Texas</li>
            <li>Originally from Florida</li>
          </ul>
        </v-flex>
      </v-flex>
      <v-flex xs12 md5 class="text-xs-center sections hunter-container">
        <img
          class="hunter-photo"
          src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1533871670/hunter.png"
          alt="hunter"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
      </v-flex>

      <!-- EDUCATION SECTION -->
      <v-flex xs12 class="text-xs-center sections flex3">
        <v-layout row wrap>
          <v-flex class="hidden-md-and-up sm-down-list mb-5">
            <ul>
              <li>Husband and Father</li>
              <li>United States Marine</li>
              <li>Florida State University Student</li>
              <li>Originally from Florida</li>
              <li>Living in San Antonio, Texas</li>
            </ul>
          </v-flex>

          <v-flex xs12 class="mt-4">
            <h2 class="primary--text display-2">Education</h2>
          </v-flex>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md4 class="mt-5 ed">
              <h3 class="display-1">Park University</h3>
              <h4 class="title my-2">Associate of Science</h4>
              <p class="subheading">Business Management</p>
              <p class="subheading">2015 - 2017</p>
            </v-flex>

            <v-flex xs12 sm6 md4 class="mt-5 ed">
              <h3 class="display-1">Park University</h3>
              <h4 class="title my-2">Bachelor of Science</h4>
              <p class="subheading">Management/Information Systems</p>
              <p class="subheading">2017 - 2018</p>
            </v-flex>

            <v-flex xs12 sm6 md4 class="mt-5 ed">
              <h3 class="display-1">Florida State University</h3>
              <h4 class="title my-2">Master of Science</h4>
              <p class="subheading">Information Technology
                <br>w/ Focus in Web Design
              </p>
              <p class="subheading">2019 - 2020</p>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-layout row wrap justify-center>
        <v-flex xs12 md6 lg5 class="text-xs-center px-3 skills">
          <h2 class="display-2 primary--text">Skills</h2>
          <v-divider class="mt-2 mb-2"></v-divider>
          <v-layout row wrap justify-center align-center>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/html.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/css.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/js.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/vue.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1551566485/codeHunter/nuxt.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871802/codeHunter/vuetify.svg"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1551566485/codeHunter/firebase.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1551566486/codeHunter/netlify.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/sass.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/vs-code.png"
                alt="logo"
              >
            </v-flex>
            <v-flex class="text-xs-center ma-3">
              <img
                src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_80/v1533871801/codeHunter/git.png"
                alt="logo"
              >
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6 xl5>
          <Contact/>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Contact from "@/components/contact";

export default {
  name: "about",
  components: {
    Contact
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 960px) {
    margin-bottom: 80px;
  }
}
.skills {
  margin-top: 115px !important;
}
.flex1 {
  padding: 20px 0 20px;
  h1 {
    font-size: 4vw;
    @media only screen and (max-width: 959px) {
      font-size: 8vw;
    }
  }
  @media only screen and (max-width: 959px) {
    h2 {
      font-size: 5vw;
      padding-bottom: 3vw;
    }
  }
  @media only screen and (min-width: 960px) {
    h2 {
      font-size: 2.8vw;
    }
    li {
      font-size: 1.5vw;
    }
  }
  ul {
    margin-top: 10%;
  }
  li {
    margin: 5% auto;
  }
}
.flex1 {
  @media screen and (min-width: 960px) {
    margin-top: 30px;
  }
}
.flex3 {
  background-color: #1c1c1c;
  padding: 10px;
  margin-top: -7px;
}
.hunter-photo {
  max-width: 60%;
  @media screen and (min-width: 960px) {
    margin-top: 30px;
  }
}
.sm-down-list {
  font-size: 5vw;
}
</style>

