<template>
  <div class="home">
    <div id="top">
      <Jumbotron/>
    </div>
    <div id="services">
      <Services/>
    </div>
    <div id="portfolio">
      <Portfolio/>
    </div>
    <div id="reviews">
      <Reviews/>
    </div>
    <div id="about">
      <About/>
    </div>
    <div class="affiliate text-xs-center">
      <Affiliate/>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/jumbotron";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import About from "@/components/about";
import Affiliate from "@/components/affiliate";

export default {
  name: "home",
  components: {
    Jumbotron,
    Services,
    Portfolio,
    Reviews,
    About,
    Affiliate
  }
};
</script>

<style lang="scss" scoped>
.affiliate {
  margin-bottom: 60px;
}
</style>
