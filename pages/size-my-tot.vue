<template>
  <v-container fluid fill-height mb-big>
    <v-layout row wrap>
      <v-flex xs12 md6 class="text-xs-center text-md-right mt-3">
        <v-btn
          color="mypurple"
          large
          href="https://sizemytot.com"
          target="_blank"
          rel="noopener"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1500"
        >View Live Website</v-btn>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center text-md-left mt-3 mb-5">
        <v-btn
          color="mypurple"
          large
          href="https://github.com/hnunnery/SizeMyTot"
          target="_blank"
          rel="noopener"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1500"
        >View GitHub Repo</v-btn>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_350/v1533871649/SizeMyTot/smt-laptop-iphone2.png"
          alt="iphone"
          class="graphics"
        >
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center mt-3">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_350/v1533871649/SizeMyTot/smt-3-phones.png"
          alt="iphones"
          class="phone-graphics"
        >
      </v-flex>
      <v-flex xs12 class="text-xs-center mt-5">
        <img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_500/v1533871649/SizeMyTot/smt-all-screens-mockup.png"
          alt="multiple devices"
          class="big-graphics"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "purple"
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