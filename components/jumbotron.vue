<template>
  <v-container fluid class="home-content" id="top">
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-parallax
          src="https://res.cloudinary.com/missionwebdev/image/upload/co_rgb:000,e_colorize:50,f_auto/v1530834010/header-img.jpg"
          height="650"
        >
          <img
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1500"
            id="main-logo"
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_850/v1531300496/codeHunterLogo.png"
            alt="code hunter logo"
          >
        </v-parallax>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "jumbotron"
};
</script>


<style lang="scss" scoped>
// HEADER - making background image div cover the correct areas
.home-content {
  padding: 0;
}
// HEADER - prallax background image
.my-parallax-img {
  background-size: cover;
}
// HEADER - limit size of header logo
#main-logo {
  max-width: 100%;
  // raises main logo up above train tracks
  margin: 0 auto 250px;
  @media only screen and (min-width: 1000px) {
    max-width: 850px;
  }
}
</style>