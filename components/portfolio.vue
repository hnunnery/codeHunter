<template>
  <v-container fluid id="portfolio" v-scroll-spy>
    <v-layout row wrap justify-center align-start>
      <v-flex xs12 class="text-xs-center">
        <h2 class="primary--text display-3">Portfolio</h2>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center my-5 px-5 vowaid">
        <router-link to="/vowaid">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,w_800/v1539557595/codeHunter/vowaid-laptop-iphone.png"
            alt="laptop and iphone"
          ></v-img>
        </router-link>
        <h2 class="display-1 mt-5">VOWAID Foundation</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="text-xs-left subheading"
        >The Veterans of War Aid Foundation is a 501 (c) 3 non-profit organization founded by U.S. Service Members that is dedicated to assisting veterans and their families by providing opportunities for financial, emotional growth and self-empowerment.</p>
      </v-flex>

      <v-flex xs12 md6 class="text-xs-center my-5 px-5 almazan-roofing">
        <router-link to="/almazan-roofing">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,w_800/v1533871620/AlmazanRoofing/ar-laptop-iphone.png"
            alt="laptop and iphone"
          ></v-img>
        </router-link>
        <h2 class="display-1 mt-5">Almazan Roofing Inc.</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="text-xs-left subheading"
        >Almazan Roofing Incorporated is a roofing company operating in the the San Antonio, Texas area. I created their website along with handling web hosting, domain name registration, and search engine optimization.</p>
      </v-flex>

      <v-flex xs12 md6 class="text-xs-center my-5 px-5 size-my-tot">
        <router-link to="/size-my-tot">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            to="/size-my-tot"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,w_800/v1533871649/SizeMyTot/smt-laptop-iphone.png"
            alt="iphone"
          ></v-img>
        </router-link>
        <h2 class="display-1 mt-5">Size My Tot</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="text-xs-left subheading"
        >Size My Tot is a simple web application that outputs your toddler's shoe size in several brands when you input the foot size in inches. This web application uses JavaScript functions to calculate the shoe sizes.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "portfolio"
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .px-5 {
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 60px;
  }
}
</style>
