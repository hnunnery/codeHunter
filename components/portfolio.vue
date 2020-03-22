<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-start class="mb-5">
      <v-flex xs12 class="text-xs-center">
        <h2 class="primary--text display-3">- Portfolio -</h2>
      </v-flex>

      <v-flex xs12 md6 class="text-xs-center my-5 px-5 vowaid">
        <a href="https://vowaidfoundation.org" target="_blank">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_auto:best,w_800/v1551824385/codeHunter/vowaid-graphic.png"
            alt="laptop and iphone"
          ></v-img>
        </a>
        <h2 class="display-1 mt-5">VOWAID Foundation</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="text-xs-left subheading"
        >The Veterans of War Aid Foundation (VOWAID) is a 501 (c) 3 non-profit organization founded by U.S. Service Members, dedicated to assisting veterans, spouses and children of disabled veterans, and fallen heroes by providing opportunities for financial, emotional growth, and self-empowerment.</p>
      </v-flex>

      <v-flex xs12 md6 class="text-xs-center my-5 px-5 almazan-roofing">
        <a href="https://almazanroofing.com" target="_blank">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_auto:best,w_800/v1551824385/codeHunter/almazanroofing-graphic.png"
            alt="laptop and iphone"
          ></v-img>
        </a>
        <h2 class="display-1 mt-5">Almazan Roofing Inc.</h2>
        <v-divider class="mt-2 mb-3"></v-divider>
        <p
          class="text-xs-left subheading"
        >Almazan Roofing Incorporated is a roofing company operating in the the San Antonio, Texas area. I created their website along with handling web hosting, domain name registration, and search engine optimization.</p>
      </v-flex>

      <v-flex xs12 md6 class="text-xs-center my-5 px-5 size-my-tot">
        <a href="https://sizemytot.com" target="_blank">
          <v-img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            to="/size-my-tot"
            class="responsive-img"
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_auto:best,w_800/v1551824385/codeHunter/sizemytot-graphic.png"
            alt="iphone"
          ></v-img>
        </a>
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
