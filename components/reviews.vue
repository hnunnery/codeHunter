<template>
  <v-container fluid class="my-5">
    <v-layout row wrap justify-center align-start class="mb-5">
      <v-flex xs12 class="text-xs-center">
        <h2 class="primary--text display-3">- Reviews -</h2>
      </v-flex>
      <!-- <v-flex xs12 md6 class="text-xs-center px-4 my-5">
        <div class="review">
          <h2 class="display-1">Veterans of War Aid Foundation</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <p
            class="text-xs-left subheading quote"
          >This is a placeholder for a future client review. Text was necessary to fill the space in order to set the website up correctly for future additions to this page. If you are reading this, maybe you can be the next client that I create a website for; that way you can leave a review instead of this placeholder.</p>
          <p class="title mt-2 mb-4">Nate Acevedo | Chief Executive Officer</p>
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,q_auto:good,w_150/v1551624791/codeHunter/ace-circle.png"
            alt="client"
            width="150px"
            class="client-photo"
          ></v-img>
        </div>
      </v-flex>-->
      <v-flex xs12 md6 class="text-xs-center px-4 my-5">
        <div class="review">
          <h2 class="display-1">Veterans of War Aid Foundation</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <p
            class="text-xs-left subheading quote"
          >"Hunter took our Veteran non-profit website to a higher level! Flawless coding, very responsive, professional and clear platform. His great work has helped us design a website that is a one-stop resource for Veterans facing some serious challenges. Also a fellow Marine Corps brother, he is able to relate our Foundation’s message to our clients as he has deep insight to the Veteran struggle. Thank you for being part of the team! 10 Star and quality service! We highly recommend CodeHunter as your web designer of choice!"</p>
          <p class="title mt-2 mb-4">Alice Ward | Founder and CFO</p>
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/f_auto,q_auto:good,w_150/v1551624791/codeHunter/alice-circle.png"
            alt="client"
            width="150px"
            class="client-photo"
          ></v-img>
        </div>
      </v-flex>
      <v-flex xs12 md6 class="text-xs-center px-4 my-5">
        <div class="review">
          <h2 class="display-1">Almazan Roofing Inc.</h2>
          <v-divider class="mt-2 mb-3"></v-divider>
          <p
            class="text-xs-left subheading quote"
          >"Hunter made the process very easy for me. My business had recently been incorporated and I needed a website. He took care of all the technical stuff. Website creation, web hosting, and domain registration were all taken care of. Hunter worked fast and made sure I was 100% satisfied with the final product. I will definitely use him in the future and recommend him to others."</p>
          <p class="title mt-2 mb-4">Ismael Almazan | Owner</p>
          <v-img
            src="https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,w_150/v1533871620/AlmazanRoofing/client-pic.png"
            alt="client"
            width="150px"
            class="client-photo"
          ></v-img>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "reviews"
};
</script>

<style lang="scss" scoped>
.client-photo {
  margin: 0 auto !important;
}
@media screen and (max-width: 400px) {
  p.title {
    font-size: 1.25em !important;
  }
}

@media screen and (max-width: 599px) {
  .px-4 {
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 60px;
  }
}
@media screen and (min-width: 960px) {
  .quote {
    height: 280px;
  }
}
@media screen and (min-width: 1350px) {
  .quote {
    height: 200px;
  }
}
</style>
