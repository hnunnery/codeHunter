<template>
  <v-container fluid class="my-5">
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-xs-center">
        <h2 class="primary--text display-3">- Services -</h2>
      </v-flex>
      <!-- Card #1 -->
      <v-flex xs12 md6 lg4 class="text-xs-center px-3">
        <v-img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_431,w_700/v1531300028/code1.jpg"
          alt="code"
          class="responsive-img elevation-12"
          contain
        ></v-img>
        <h2 class="display-1 mt-5 text-xs-center shrink">Design and Development</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="subheading text-xs-left"
        >Cutting edge web development frameworks and methodologies are used to craft your website from the ground up. You will have a fast, clean, cutting-edge site for your business. "Responsive web design" will be utilized in order to make your site look great on all devices.</p>
      </v-flex>
      <!-- Card #2 -->
      <v-flex xs12 md6 lg4 class="text-xs-center px-3">
        <v-img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_fill,f_auto,g_center,h_431,w_700/v1531975229/logo-bg-tall.png"
          alt="logos"
          class="responsive-img elevation-12"
          contain
        ></v-img>
        <h3 class="display-1 mt-5 text-xs-center">Logo Design</h3>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="subheading text-xs-left"
        >Need a simple and professional logo designed? Get one designed along with your new website. Satisfaction guaranteed; unlimited revisions until we find the perfect logo for your business. Get provided with high resolution logos in various file types and color schemes.</p>
      </v-flex>
      <!-- Card #3 -->
      <v-flex xs12 md6 lg4 class="text-xs-center px-3">
        <v-img
          src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_700/v1531302311/consulting.jpg"
          alt="consulting"
          class="responsive-img elevation-12"
          contain
        ></v-img>
        <h3 class="display-1 mt-5 text-xs-center">Web Consulting</h3>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="subheading text-xs-left"
        >I can handle or assist you with Domain Name Registration, Search Engine Optimization (SEO), Web Hosting, Business Email (name@business.com), Google Business Listings, Business Cards, and Social Media. I'll care of this stuff so that you can focus on your business.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "services"
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .px-3 {
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 60px;
  }
  .shrink {
    font-size: 30px !important;
  }
}
</style>
