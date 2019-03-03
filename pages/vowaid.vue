<template>
  <v-container fluid fill-height mb-big>
    <v-layout row wrap>
      <v-flex xs12 md6 class="text-xs-center text-md-right mt-3">
        <v-btn
          class="myblue"
          large
          href="https://www.vowaidfoundation.org"
          target="_blank"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1500"
        >View Live Website</v-btn>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center text-md-left mt-3 mb-5">
        <v-btn
          class="myblue"
          large
          href="https://github.com/hnunnery/vowaid-foundation"
          target="_blank"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1500"
        >View GitHub Repo</v-btn>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center mt-3">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_350/v1539557595/codeHunter/vowaid-laptop-iphone2.png"
          alt="iphone"
          class="graphics"
        >
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center mt-3">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_350/v1539557596/codeHunter/vowaid-3-phones.png"
          alt="iphone"
          class="phone-graphics"
        >
      </v-flex>
      <v-flex xs12 class="text-xs-center mt-3">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_500/v1539557596/codeHunter/vowaid-all-screens.png"
          alt="multiple devices"
          class="big-graphics"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "blue"
};
</script>

<style lang="scss" scoped>
.graphics {
  max-height: 350px;
  max-width: 100%;
}
.phone-graphics {
  max-height: 350px;
  max-width: 60%;
}
.big-graphics {
  max-height: 500px;
  max-width: 100%;
}
.mb-big,
.big-graphics {
  margin-bottom: 60px;
}
</style>